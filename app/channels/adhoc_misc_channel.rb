class AdhocMiscChannel < ApplicationCable::Channel
  def subscribed
    stream_from "confetti"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
