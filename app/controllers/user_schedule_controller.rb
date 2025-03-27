class UserScheduleController < ApplicationController

  def create
    zone = Time.find_zone(params[:tz])
    res = get_parsed_schedule params[:schedule]

    if res["schedule"]
      res["schedule"].split(",").map { |s|
        start_raw, finish_raw = s.split("-")

        # UTC times for today, accounting for user's time zone
        start = zone.parse(start_raw).utc
        finish = zone.parse(finish_raw).utc

        UserSchedule.create(user: current_user, start:, finish:)
      }
    else
      puts res["error"]
    end

    head :ok
  end

  private

  def get_parsed_schedule(text_description)
    response = HTTP.post("https://ai.hackclub.com/chat/completions", body: JSON.dump({
      "messages": [
        {
          "role": "system",
          "content": "given the following schedule description, extract the schedule in the format {\"schedule\":\"hh:mm-hh:mm,hh:mm-hh:mm,...\"}. return your answer with no other text than that. for example, \"i'm free today from 9 to 5 except an hour at 1pm\" should return {\"schedule\":\"09:00-13:00,14:00-17:00\"}. if there is ambiguity in the times return {\"error\":\"ambiguous\"}. if they try to provide you with a day's schedule other than today return {\"error\":\"not-today\"}."
        },
        {
          "role": "user",
          "content": text_description
        }
      ]
    }), headers: {
      "Content-Type": "application/json"
    })

    data = JSON.parse(response.body.to_s)

    return JSON.parse(data["choices"][0]["message"]["content"])
  end
end
