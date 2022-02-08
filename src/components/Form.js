import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import fetchResponse from "../lib/fetchResponse";

export default function NormalLoginForm({ status, setStatus }) {
  return (
    <Form
      name="normal_login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email Address*" />
      </Form.Item>
        
      <Form.Item
        name="password"
        // rules={[            //password rules disabled to allow missing password fetch errors to happen
        //   {
        //     required: true,
        //     message: "Please input your Password!",
        //   },
        // ]}

      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password*"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          loading={status === "pending" ? true : false}
          block
          htmlType="submit"
        >
          Log in
        </Button>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember Password</Checkbox>
          </Form.Item>
          <a href="./">Forgot password?</a>
        </Form.Item>
      </Form.Item>
    </Form>
  );

  async function onFinish(values) {
    if (status === "pending") return;
    setStatus("pending");

    const res = await fetchResponse({
      email: values.username,
      password: values.password,
    });

    if (res.data.error) {
      setStatus("authError");
    } else if (res.data.token) {
      setStatus("fulfilled");
    } else {
      setStatus("error");
    }
  }
}
