import { useAuthUser } from "react-auth-kit";
import "./style.css";
import { Avatar, Watermark } from "antd";

const Profile = () => {
  const auth = useAuthUser()();
  return (
    <div>
      <div className="profile-header">
        <Watermark content="Leksika">
          <div
            style={{
              height: 400,
              position: "relative",
            }}
          >
            <div className="avatar-style">
              <Avatar
                style={{
                  backgroundColor: "#fde3cf",
                  color: "#f56a00",
                  width: "90px",
                  height: "90px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "30px",
                }}
              >
                A
              </Avatar>
              <h3 className="avatar-text">{auth?.username}</h3>
            </div>
          </div>
        </Watermark>
      </div>
    </div>
  );
};

export default Profile;
