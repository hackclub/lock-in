class Room < ApplicationRecord
  acts_as_paranoid

  has_many :user_presences, dependent: :destroy
  has_many :users, through: :user_presences

  # validates :max_users, presence: true, numericality: { greater_than: 0 }

  def close_room
    destroy
    user_presences.destroy
  end

  def full?
    users.count >= max_users
  end

  private

  def validate_user_count
    if full?
      errors.add(:base, "Room has reached the max user limit")
    end
  end
end
