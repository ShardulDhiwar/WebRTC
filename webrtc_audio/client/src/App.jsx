import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const localAudio = useRef();
  const remoteAudio = useRef();
  const pc = useRef();

  useEffect(() => {
    pc.current = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      localAudio.current.srcObject = stream;

      stream.getTracks().forEach((track) => {
        pc.current.addTrack(track, stream);
      });
    });

    pc.current.ontrack = (event) => {
      remoteAudio.current.srcObject = event.streams[0];
    };

    pc.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", {
          to: "user2",
          candidate: event.candidate,
        });
      }
    };

    socket.on("offer", async ({ offer }) => {
      await pc.current.setRemoteDescription(offer);
      const answer = await pc.current.createAnswer();
      await pc.current.setLocalDescription(answer);

      socket.emit("answer", { to: "user1", answer });
    });

    socket.on("answer", async ({ answer }) => {
      await pc.current.setRemoteDescription(answer);
    });

    socket.on("ice-candidate", async (candidate) => {
      await pc.current.addIceCandidate(candidate);
    });
  }, []);

  const callUser = async () => {
    const offer = await pc.current.createOffer();
    await pc.current.setLocalDescription(offer);

    socket.emit("offer", { to: "user2", offer });
  };

  return (
    <div>
      <h2>Audio Call</h2>
      <audio ref={localAudio} autoPlay controls />
      <audio ref={remoteAudio} autoPlay controls />
      <button onClick={callUser}>Call</button>
    </div>
  );
}

export default App;