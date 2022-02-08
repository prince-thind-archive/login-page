import { Col, Row, Image, Typography, Space } from "antd";
import mainImage from "../assets/images/main.jpg";
import Form from "./Form";

const { Title, Text } = Typography;

export default function MainContent() {
  return (
    <main>
      <Row justify="middle" style={{ margin: "0 1rem" }}>
        <Col span={8}>
          <Space direction="vertical" size={"middle"}>
            <div>
              <Title level={1} style={{ marginBottom: "0" }}>
                Welcome Back
              </Title>
              <Text type="secondary">
                Please Enter Username and Password to login
              </Text>
            </div>
            <Form />
          </Space>
        </Col>
        <Col span={16}>
          <Image width={"90%"} src={mainImage} />
        </Col>
      </Row>
    </main>
  );
}
