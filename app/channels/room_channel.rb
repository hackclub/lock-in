class RoomChannel < ApplicationCable::Channel
  def subscribed
    # if current_user&.peer_id.present?
    puts "SUBSCRIPT", params
    stream_from "peer"
    # end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
