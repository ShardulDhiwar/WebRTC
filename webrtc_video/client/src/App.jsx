import { useState } from "react";
import { io } from "socket.io-client";
import useWebRTC from "./hooks/useWebRTC";
import VideoCall from "./components/VideoCall";

const socket = io("http://localhost:5000");

function App() {
  const [username, setUsername] = useState("");
  const [target, setTarget] = useState("");
  const [joined, setJoined] = useState(false);

  const { localVideo, remoteVideo, startCall } = useWebRTC(
    socket,
    target
  );

  const join = () => {
    socket.emit("join", username);
    setJoined(true);
  };

  if (!joined) {
    return (
      <div>
        <h2>Join Call</h2>
        <input
          placeholder="Your name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Call user"
          onChange={(e) => setTarget(e.target.value)}
        />
        <button onClick={join}>Join</button>
      </div>
    );
  }

  return (
    <VideoCall
      localVideo={localVideo}
      remoteVideo={remoteVideo}
      startCall={startCall}
    />
  );
}

export default App;