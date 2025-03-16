class HomeController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index
    # flash.notice = "The operation was successful!"
  end

  def confetti
    ActionCable.server.broadcast "confetti", { type: "confetti", user: current_user.username }
  end
end
