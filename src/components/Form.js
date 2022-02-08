import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import fetchResponse from "../lib/fetchResponse";

export default function NormalLoginForm() {
  
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
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password*"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" block htmlType="submit">
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
    const data = await fetchResponse({
      email: values.username,
      password: values.password,
    });
    console.log(data);
  }
}
