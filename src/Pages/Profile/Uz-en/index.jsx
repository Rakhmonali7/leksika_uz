import { Button, Card, Empty, Tag } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setUzEnModal } from "../../../redux/modalSlice";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";

const UzEn = () => {
  const auth = useAuthUser()();
  const { uzEn } = useSelector((state) => state.modal);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios(
      `https://api.leksika.uz/user/new-word/uz-en/get?ref_id=${auth?.id ?? ""}`
    ).then((res) => setData(res.data.data));
  }, [uzEn, auth]);

  return (
    <div className="en_uz_container">
      <Button
        style={{ backgroundColor: "#01756C" }}
        type="primary"
        icon={<PlusCircleOutlined />}
        onClick={() => dispatch(setUzEnModal())}
      >
        Uz-En
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

export default UzEn;
