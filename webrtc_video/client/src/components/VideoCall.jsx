export default function VideoCall({
  localVideo,
  remoteVideo,
  startCall,
}) {
  return (
    <div>
      <h2>Video Call</h2>

      <video
        ref={localVideo}
        autoPlay
        playsInline
        muted
        style={{ width: "300px" }}
      />

      <video
        ref={remoteVideo}
        autoPlay
        playsInline
        style={{ width: "300px" }}
      />

      <br />

      <button onClick={startCall}>Start Call</button>
    </div>
  );
}