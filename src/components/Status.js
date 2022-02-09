import { Typography } from "antd";
const { Text } = Typography;

export default function Status({ status }) {
  switch (status) {
    case "idle":
      return <Text type="danger">&nbsp;</Text>;
    case "pending":
      return <Text type="warning">Loading...</Text>;
    case "authError":
      return <Text type="danger">UserName or Password incorrect</Text>;
    case "fulfilled":
      return <Text type="success">Success! User Found</Text>;
    case "error":
      return <Text type="danger">Unknown Error Occured</Text>;

    default:
      return null;
  }
}
