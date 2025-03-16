class AdhocMiscChannel < ApplicationCable::Channel
  def subscribed
    stream_from "confetti"
    # stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
