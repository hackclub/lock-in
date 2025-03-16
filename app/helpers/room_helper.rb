module RoomHelper
  def peer_presences
    current_user&.room&.user_presences&.where&.not(user: current_user)
  end
end
