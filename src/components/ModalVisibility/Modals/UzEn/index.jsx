import { Button, Form, Input, Modal, Space, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setUzEnModal } from "../../../../redux/modalSlice";
import { useState } from "react";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
import { LoadingOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";

const { TextArea } = Input;

const UzEnModal = () => {
  const [form] = useForm();
  const auth = useAuthUser()();
  const dispatch = useDispatch();
  const { uzEn } = useSelector((state) => state.modal);
  const [loading, setLoading] = useState(false);

  const onFinish = async (e) => {
    setLoading(true);
    try {
      const res = await axios({
        url: "https://api.leksika.uz/user/new-word/uz-en",
        method: "POST",
        data: { ...e, ref_id: auth.id },
      });
      const user = res.data;

      notification.success({ message: user.message });
      dispatch(setUzEnModal());
    } catch (error) {
      notification.error({ message: error.response.data.extraMessage });
    }
    form.resetFields();
    setLoading(false);
  };

  return (
    <Modal
      open={uzEn}
      onCancel={() => dispatch(setUzEnModal())}
      title="Uz-En word"
      footer={false}
    >
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          name="word"
          label="Word"
          rules={[
            {
              required: true,
              message: "Please enter a word!",
            },
          ]}
        >
          <Input placeholder="Word..." />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please enter a description!",
            },
          ]}
        >
          <TextArea
            autoSize={{
              minRows: 3,
              maxRows: 20,
            }}
            placeholder="Description..."
            maxLength={500}
            showCount
          />
        </Form.Item>
        <Form.Item>
          <Space style={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={() => dispatch(setUzEnModal())} htmlType="button">
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              {loading ? <LoadingOutlined /> : "Add"}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UzEnModal;
