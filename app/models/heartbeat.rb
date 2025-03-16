class Heartbeat < HackatimeRecord
  default_scope { order(time: :asc) }
  belongs_to :user, primary_key: :slack_uid, foreign_key: :user_id

  def self.cached_recent_count
    Rails.cache.fetch("heartbeats_recent_count", expires_in: 5.minutes) do
      recent.size
    end
  end

  scope :recent, -> { where("time > ?", 24.hours.ago) }
  scope :today, -> { where("DATE(time) = ?", Date.current) }

  # This is a hack to avoid using the default Rails inheritance column– Rails is confused by the field `type` in the db
  self.inheritance_column = nil
  # Prevent collision with Ruby's hash method
  self.ignored_columns += [ "hash" ]
end
