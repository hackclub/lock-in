class CheckSchedulesJob < ApplicationJob
  queue_as :default

  def perform(*args)
    users = UserSchedule.where("start < now() and finish > now()").map(&:user).uniq
    if users.length % 2 == 1 # Not robust. Assumes max room size is 2. If it gets changed to higher than that it is more complex because 2 users can be in 3 person max room.
      users.pop()
    end

    for user in users
      user.holler
    end

  end
end
