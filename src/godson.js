import "./godson.css";
import smile from "./smile.jpg";

export default function Godson() {
  return (
    <div className="card">
      <img src={smile} alt="profile pic" className="profilePic" />
      <p className="profileName">Marie Vaxx</p>
    </div>
  );
}
