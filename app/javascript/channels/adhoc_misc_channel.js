import consumer from "channels/consumer";

consumer.subscriptions.create("AdhocMiscChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    if (data.type === "confetti") {
      console.info(`${data.user} triggered confetti!`);
      const particleCount = 10;
      confetti({
        particleCount,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }
  },
});
