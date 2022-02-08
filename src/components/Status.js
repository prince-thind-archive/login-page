import { Result, Spin } from "antd";

export default function Status({ status }) {
  switch (status) {
    case "idle":
      return null;
    case "pending":
      return <Spin />;
    case "authError":
      return (
        <Result status="error" title="The username or passsword is incorrect" />
      );
    case "fulfilled":
      return <Result status="success" title="Success! User found" />;
    case "error":
      return <Result status="warning" title="Unknown Error" />;
    default:
      return null;
  }
}
