import FCard from "./FCard";
import "./feed.css";
import sus from "../../Assets/Images/itachi.jpeg";

export default function Feed() {
  return (
    <>
      <div className="feed-container">
        <div className="feed-title">Our Feed</div>
        <div className="card-grid">
          <FCard lol="https://picsum.photos/1080" />
          <FCard lol="https://picsum.photos/1081" />
          <FCard lol="https://picsum.photos/1082" />
          <FCard lol="https://picsum.photos/1083" />
          <FCard lol="https://picsum.photos/1084" />
          <FCard lol="https://picsum.photos/1085" />
        </div>
      </div>
    </>
  );
}
