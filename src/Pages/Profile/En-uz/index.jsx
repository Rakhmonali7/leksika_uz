import { Button, Card, Empty, Tag } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setEnUzModal } from "../../../redux/modalSlice";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";

const EnUz = () => {
  const auth = useAuthUser()();
  const { enUz } = useSelector((state) => state.modal);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios(
      `https://api.leksika.uz/user/new-word/en-uz/get?ref_id=${auth?.id ?? ""}`
    ).then((res) => setData(res.data.data));
  }, [enUz, auth]);

  return (
    <div className="en_uz_container">
      <Button
        style={{ backgroundColor: "#01756C" }}
        type="primary"
        icon={<PlusCircleOutlined />}
        onClick={() => dispatch(setEnUzModal())}
      >
        En-Uz
      </Button>
      {data.length ? (
        data.map((value, idx) => (
          <Card
            key={idx}
            style={{
              width: "100%",
              marginTop: 16,
            }}
            actions={[
              <Tag color="warning">{value.status}</Tag>,
              // <EditOutlined key="edit" />,
              // <DeleteOutlined key="delete" />,
            ]}
          >
            <Meta title={value.word} description={value.description} />
          </Card>
        ))
      ) : (
        <Empty style={{ marginTop: "50px" }} />
      )}
    </div>
  );
};

export default EnUz;
