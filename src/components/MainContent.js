import { Col, Row, Image, Typography } from "antd";
import mainImage from "../assets/images/main.jpg";
import Form from "./Form";

const { Title, Text } = Typography;

export default function MainContent({ status, setStatus }) {
  return (
    <main>
      <Row align="middle" style={{ margin: "0 1rem" }}>
        <Col xs={{ span: 24 }} md={{span:12}} xl={{ span: 8 }}>
          <Row justify="center">
            <Col xs={{ span: 20 }} md={{ span: 16 }}>
              <Title level={1} style={{ marginBottom: "0" }}>
                Welcome Back
              </Title>
              <Text type="secondary">
                Please Enter Username and Password to login
              </Text>
              <Form status={status} setStatus={setStatus} />
            </Col>
          </Row>
        </Col>
        <Col xs={{ span: 0 }} md={{span:12}} xl={{ span: 16 }}>
          <Image width={"90%"} src={mainImage} />
        </Col>
      </Row>
    </main>
  );
}
