import { Form, Input, notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useSignIn } from "react-auth-kit";
import { useState } from "react";
import axios from "axios";
import { setAuthModal } from "../../../../../redux/modalSlice";

const Register = () => {
  const dispatch = useDispatch();
  const signIn = useSignIn();
  const [loading, setLoading] = useState(false);

  const onFinish = async (e) => {
    setLoading(true);
    try {
      const res = await axios({
        url: "http://localhost:4000/auth/register",
        method: "POST",
        data: e,
      });
      const user = res.data;
      signIn({
        token: user.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: user.user,
      });

      notification.success({ message: user.message });
      dispatch(setAuthModal());
    } catch (error) {
      console.log(error);
      notification.error({ message: error.response.data.message });
    }
    setLoading(false);
  };

  return (
    <div>
      <p
        style={{
          marginBottom: "15px",
        }}
      >
        Enter your email, username and password to sign up.
      </p>
      <Form onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter email!",
            },
          ]}
        >
          <Input
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Email"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please enter username!",
            },
          ]}
        >
          <Input
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter password!",
            },
          ]}
        >
          <Input.Password
            className="h-[40px] mt-[17px] border border-[#46A358]"
            placeholder="*********"
            type="password"
          />
        </Form.Item>
        <button type="submit" className="auth-button">
          {loading ? <LoadingOutlined /> : "Sign Up"}
        </button>
      </Form>{" "}
      {/* <button className="google-button cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md">
        <GoogleOutlined className="pl-[15px]" />
        Sign up with Google
      </button> */}
    </div>
  );
};

export default Register;
