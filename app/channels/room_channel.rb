class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_#{current_user.room.id}" # stream_for room
  end

  def receive(data)
    ActionCable.server.broadcast("room_#{current_user.room.id}", {
      **data,
      peer_id: current_user.user_presence.peer_id,
    })
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
