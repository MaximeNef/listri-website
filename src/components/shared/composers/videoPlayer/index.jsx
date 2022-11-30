import Container from "../container";

const VideoPlayer = ({ video }) => {
  return (
    <video autoPlay muted loop style={{ width: "500px", height: "500px" }}>
      <source src={`${video}`} />
    </video>
  );
};
export default VideoPlayer;
