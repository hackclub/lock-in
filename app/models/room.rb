class Room < ApplicationRecord
  acts_as_paranoid

  MAX_ROOM_SIZE = 2

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

  def notify
    return if users.empty?

    text = users.size == 1 ? "<@#{users.first.slack_uid}> is waiting for someone to lock in with!" : "<@#{users.map(&:slack_uid).join('> & <@')}> are now locked in together!"

    res = HTTP.post(
      "https://slack.com/api/chat.postMessage",
      body: JSON.dump({
        "channel": "C08JV3ZV1DY",
        "text": text
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer #{ENV['SLACK_BOT_SECRET']}"
      }
    )

    puts "arosntearstsroe", res
  end

  private

  def validate_user_count
    if full?
      errors.add(:base, "Room has reached the max user limit")
    end
  end
end
