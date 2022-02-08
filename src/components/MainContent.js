import { Col, Row, Image } from "antd";
import mainImage from "../assets/images/main.jpg";

export default function MainContent() {
  return (
    <main>
      <Row>
        <Col span={6}></Col>
        <Col span={18}>
          <Image width={"90%"} src={mainImage} />
        </Col>
      </Row>
    </main>
  );
}
