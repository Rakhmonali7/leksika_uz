import "./style.css";
import EnUz from "./En-uz";
import UzEn from "./Uz-en";

const Profile = () => {
  return (
    <div>
      <div className="main-profile-wrapper">
        <EnUz />
        <div className="divider" />
        <UzEn />
      </div>
    </div>
  );
};

export default Profile;
