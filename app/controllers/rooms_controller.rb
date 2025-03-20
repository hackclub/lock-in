class RoomsController < ApplicationController
  before_action :authenticate_user!

  def show
    room = current_user.room
    return redirect_to root_path unless room.present?

    @peer_id = current_user.user_presence.peer_id
    @turn_creds = generate_cf_turn_creds
    ActionCable.server.broadcast("peer", { type: "loaded" })
  end

  def room_content
    @peer_id    = current_user.user_presence.peer_id
    @turn_creds = generate_cf_turn_creds
    render partial: "room_content"
  end

  def new
    @projects = current_user.projects
  end

  def create
    return redirect_to room_path if current_user.room

    # Find the first active room that is not full
    room = Room.joins(:users).group("rooms.id").having("COUNT(users.id) < rooms.max_users").first

    notice = "You've joined the room"

    if room.present?
      user_presence = UserPresence.create(user: current_user, room: room, description: params[:room][:description], project: params[:room][:project])
      html = ApplicationController.renderer.render(
        partial: "rooms/user_video",
        locals: { user_presence: user_presence }
      )
      room.update(started_at: DateTime.now)
      RoomCloseJob.perform_in 1.hour, room.id
      ActionCable.server.broadcast("peer", { type: "CALL_JOINED", html:, peer_id: current_user.user_presence.peer_id, username: current_user.username })
    else
      room = Room.new(max_users: 2)
      UserPresence.create(user: current_user, room: room, description: params[:room][:description], project: params[:room][:project])
      room.save!
      notice = "You've created a room"
    end

    redirect_to room_path, notice: notice
  end

  def screenshare_ended
    ActionCable.server.broadcast "peer", {
      type: "SCREENSHARE_ENDED",
      peer_id: current_user.user_presence.peer_id
    }

    head :ok
  end

  def leave
    current_user.room.destroy
    ActionCable.server.broadcast("peer", { type: "CALL_DESTROYED" })
    # peer_id = current_user.user_presence.peer_id
    # current_user.user_presence.destroy
    # ActionCable.server.broadcast("peer", { type: "CALL_LEFT", peer_id: })

    # redirect_to root_path, notice: "You left the call!"
  end

  def destroy
    current_user.room.destroy
    ActionCable.server.broadcast("peer", { type: "CALL_DESTROYED" })
  end

  def end_tour
    current_user.user_pref.update(had_room_tour: true)
    head :ok
  end

  def restart_tour
    current_user.user_pref.update(had_room_tour: false)
    head :ok
  end

  def refresh_coding_activity
    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: current_user.room.user_presences.map { |up| turbo_stream.replace("coding-activity-#{up.peer_id}", partial: "shared/coding_activity", locals: { user: up.user }) }
      end
    end
  end

  def refresh_timer
    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: turbo_stream.replace("timer", partial: "shared/timer")
      end
    end
  end

  private

  def generate_cf_turn_creds
    cf_response = HTTP
      .auth("Bearer #{ENV["CF_TURN_SECRET"]}")
      .post("https://rtc.live.cloudflare.com/v1/turn/keys/#{ENV["CF_TURN_ID"]}/credentials/generate", :json => { :ttl => 3600 })
    creds = JSON.parse(cf_response.body.to_s)
    creds
  end
end
