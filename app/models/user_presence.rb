class UserPresence < ApplicationRecord
  acts_as_paranoid

  belongs_to :user
  belongs_to :room

  validate :one_presence_per_user
  validate :room_is_not_full

  before_create :generate_peer_id
  # after_destroy :close_empty_room

  private

  def one_presence_per_user
    if UserPresence.where(user:).exists?
      errors.add(:user, "can only have one presence at a time")
    end
  end

  def room_is_not_full
    errors.add(:room, "has reached the max user limit") if room.full?
  end

  def generate_peer_id
    self.peer_id ||= SecureRandom.uuid
  end

  def close_empty_room
    room&.destroy! if room&.users&.count&.zero?
  end
end
