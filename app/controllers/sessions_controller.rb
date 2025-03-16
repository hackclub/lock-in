# class SessionsController < ApplicationController
#   def create
#     auth = request.env["omniauth.auth"]
#     puts auth
#     user = User.find_or_create_by(provider: auth.provider, uid: auth.uid) do |u|
#       u.name = auth.info.name
#       u.access_token = auth.credentials.token
#     end

#     session[:user_id] = user.id
#     redirect_to root_path
#   end

#   def destroy
#     session[:user_id] = nil
#     redirect_to root_path
#   end
# end

class SessionsController < ApplicationController
  def new
    redirect_uri = url_for(action: :create, only_path: false)
    Rails.logger.info "Starting Slack OAuth flow with redirect URI: #{redirect_uri}"
    redirect_to User.authorize_url(redirect_uri),
                host: "https://slack.com",
                allow_other_host: true
  end

  def create
    redirect_uri = url_for(action: :create, only_path: false)

    if params[:error].present?
      Rails.logger.error "Slack OAuth error: #{params[:error]}"
      redirect_to root_path, alert: "Failed to authenticate with Slack"
      return
    end

    @user = User.from_slack_token(params[:code], redirect_uri)
    puts @user

    if @user&.persisted?
      session[:user_id] = @user.id
      redirect_to root_path, notice: "Successfully signed in with Slack!"
    else
      Rails.logger.error "Failed to create/update user from Slack data"
      redirect_to root_path, alert: "Failed to sign in with Slack"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Signed out!"
  end
end
