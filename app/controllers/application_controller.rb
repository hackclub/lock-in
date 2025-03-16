class ApplicationController < ActionController::Base
  helper_method :current_user

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  rescue => e
    @current_user = nil
    session[:user_id] = nil
    redirect_to root_path
  end

  def authenticate_user!
    redirect_to root_path unless current_user
  end
end
