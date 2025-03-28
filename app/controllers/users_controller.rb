class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:holler_answered]

  def holler_answered
    phone = params[:To]

    if params[:CallStatus] == "completed"
      User.find_by(phone:).user_schedules.destroy_all
    end

    head :ok
  end
end
