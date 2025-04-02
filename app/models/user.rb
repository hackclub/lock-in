class User < ApplicationRecord
  acts_as_paranoid

  has_one :user_presence
  has_one :room, through: :user_presence
  has_one :user_pref
  has_many :heartbeats, primary_key: :slack_uid, foreign_key: :user_id
  has_many :user_schedules
  has_many :screenshots

  after_create :create_pref

  def self.authorize_url(redirect_uri)
    params = {
      client_id: ENV["SLACK_CLIENT_ID"],
      redirect_uri: redirect_uri,
      state: SecureRandom.hex(24),
      user_scope: "users.profile:read,users.profile:write,users:read,users:read.email"
    }

    "https://slack.com/oauth/v2/authorize?#{params.to_query}"
  end

  def self.from_slack_token(code, redirect_uri)
    # Exchange code for token
    response = HTTP.post("https://slack.com/api/oauth.v2.access", form: {
      client_id: ENV["SLACK_CLIENT_ID"],
      client_secret: ENV["SLACK_CLIENT_SECRET"],
      code: code,
      redirect_uri: redirect_uri
    })

    data = JSON.parse(response.body.to_s)

    return nil unless data["ok"]

    # Get user info
    user_response = HTTP.auth("Bearer #{data['authed_user']['access_token']}")
      .get("https://slack.com/api/users.info?user=#{data['authed_user']['id']}")

    user_data = JSON.parse(user_response.body.to_s)
    puts user_data

    return nil unless user_data["ok"]

    user = find_or_initialize_by(slack_uid: data.dig("authed_user", "id"))
    user.email = user_data.dig("user", "profile", "email")
    user.username = user_data.dig("user", "name")
    user.avatar_url = user_data.dig("user", "profile", "image_192") || user_data.dig("user", "profile", "image_72")
    # Store the OAuth data
    user.slack_access_token = data["authed_user"]["access_token"]
    user.slack_scopes = data["authed_user"]["scope"]&.split(/,\s*/)
    user.save!
    user
  rescue => e
    Rails.logger.error "Error creating user from Slack data: #{e.message}"
    nil
  end

  def active_heartbeat
    heartbeats.where("time > ?", 5.minutes.ago).last
  end

  def projects
    heartbeats
      .reorder(nil)
      .group(:project)
      .order("MAX(time) DESC")
      .pluck(:project)
      .select { |p| !["<<LAST_PROJECT>>", ""].include? p }
  end

  def holler
    return if phone.nil?

    client = Twilio::REST::Client.new(ENV["TWILIO_ACCOUNT_SID"], ENV["TWILIO_AUTH_TOKEN"])

    call = client
           .api
           .v2010
           .calls
           .create(
             from: '+14323094225',
             to: phone,
             twiml: "<?xml version='1.0' encoding='UTF-8'?>
  <Response>
    <Say voice='man'>Hey #{username}, it's Lock in from Hack Club. Your schedule matched with another Hack Clubber. It's time to lock in! Be quick.</Say>
    <Hangup/>
  </Response>
",
             status_callback: 'https://92c8-73-119-115-16.ngrok-free.app/twilio/holler-answered',
             status_callback_method: 'POST'
           )
  end

  # def project_names
  #   heartbeats.select(:project).distinct.pluck(:project)
  # end

  # def active_project
  #   most_recent_direct_entry_heartbeat&.project
  # end

  # def active_project_duration
  #   return nil unless active_project

  #   heartbeats.where(project: active_project).duration_seconds
  # end

  # def most_recent_direct_entry_heartbeat
  #   heartbeats.where(source_type: :direct_entry).order(time: :desc).first
  # end

  private

  def create_pref
    UserPref.create(user: self)
  end
end
