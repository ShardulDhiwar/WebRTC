import { useEffect, useRef } from "react";

export default function useWebRTC(socket, targetUser) {
  const pc = useRef(null);
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);

  useEffect(() => {
    pc.current = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideo.current.srcObject = stream;

        stream.getTracks().forEach((track) => {
          pc.current.addTrack(track, stream);
        });
      });

    pc.current.ontrack = (event) => {
      remoteVideo.current.srcObject = event.streams[0];
    };

    pc.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", {
          to: targetUser,
          candidate: event.candidate,
        });
      }
    };

    socket.on("offer", async ({ offer }) => {
      await pc.current.setRemoteDescription(offer);

      const answer = await pc.current.createAnswer();
      await pc.current.setLocalDescription(answer);

      socket.emit("answer", { to: targetUser, answer });
    });

    socket.on("answer", async ({ answer }) => {
      await pc.current.setRemoteDescription(answer);
    });

    socket.on("ice-candidate", async ({ candidate }) => {
      await pc.current.addIceCandidate(candidate);
    });
  }, []);

  const startCall = async () => {
    const offer = await pc.current.createOffer();
    await pc.current.setLocalDescription(offer);

    socket.emit("offer", { to: targetUser, offer });
  };

  return { localVideo, remoteVideo, startCall };
}