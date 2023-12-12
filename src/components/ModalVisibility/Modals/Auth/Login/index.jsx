import { Form, Input } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { setAuthModal } from "../../../../../redux/modalSlice";

const Login = () => {
  const dispatch = useDispatch();
  const signIn = useSignIn();
  const [loading, setLoading] = useState(false);
  const onFinish = async (e) => {
    setLoading(true);
    try {
      const res = await axios({
        url: "http://localhost:4000/auth/login",
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
      notification.error({ message: "Username or password might be wrong!" });
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
        Enter your username and password to login.
      </p>
      <Form onFinish={onFinish}>
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
          {loading ? <LoadingOutlined /> : "Login"}
        </button>
      </Form>
      {/* <button className="google-button cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md">
        <GoogleOutlined className="pl-[15px]" />
        Sign in with Google
      </button> */}
    </div>
  );
};

export default Login;
