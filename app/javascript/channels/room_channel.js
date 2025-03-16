import consumer from "channels/consumer";

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log("Connected to room channel");
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log("Recv room channel data", data);

    if (data.type === "CALL_JOINED") {
      document.dispatchEvent(
        new CustomEvent("userjoin", { detail: { username: data.username } }),
      );
      const peerId = data.peer_id;

      const fragment = document
        .createRange()
        .createContextualFragment(data.html);
      document.getElementById("remote-videos-container").prepend(fragment);

      fetch("/room/timer/refresh", {
        headers: { Accept: "text/vnd.turbo-stream.html" },
      })
        .then((response) => response.text())
        .then((html) => Turbo.renderStreamMessage(html));

      // Create a new video element to display the remote user's stream.
      // const videoContainer = document.querySelector(".video-container");
      // const newVideo = document.createElement("video");
      // newVideo.id = `remote-video-${peerId}`;
      // newVideo.setAttribute("autoplay", "");
      // newVideo.setAttribute("playsinline", "");
      // videoContainer.appendChild(newVideo);

      // if (window.peer && window.stream) {
      //   const call = window.peer.call(peerId, window.stream);
      //   call.on("stream", (remoteStream) => {
      //     const remoteVideoElem = document.getElementById(
      //       `remote-video-${peerId}`,
      //     );
      //     if (remoteVideoElem) {
      //       remoteVideoElem.srcObject = remoteStream;
      //     }
      //   });
      //   call.on("error", (err) => console.error("Call error", err));
      // }
    } else if (data.type === "CALL_LEFT") {
      const peerId = data.peer_id;
      const selector = `.video-container:has(video#remote-video-${peerId})`;
      const videoElementToRemove = document.querySelector(selector);
      videoElementToRemove.remove();
    } else if (data.type === "CALL_DESTROYED") {
      location.href = "/";
    }
  },
});
