class ScreenshotsController < ApplicationController
  before_action :authenticate_user!

  def index
    return head :unauthorized unless %w(malted@malted.dev max@maxwofford.com).include?(current_user.email)

    @users = User.joins(:screenshots).group("users.id").having('COUNT(screenshots.id) > 0')
  end

  def show
    return head :unauthorized unless %w(malted@malted.dev max@maxwofford.com).include?(current_user.email)

    @user = User.find_by(id: params[:id])
    @screenshots = Screenshot.where(user: @user)
  end
end
