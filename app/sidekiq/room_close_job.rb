class RoomCloseJob
  include Sidekiq::Job

  def perform(room_id)
    Room.find(room_id)&.destroy
  end
end
