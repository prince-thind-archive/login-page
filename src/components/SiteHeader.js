import { Button, PageHeader, Typography } from "antd";
import React from "react";
import { secondary as secondaryColor, primary as primaryColor} from "../lib/themes";

const { Title } = Typography;

export default function SiteHeader() {
  const title = (
    <Title level={3} style={{ color: primaryColor }}>
      ATools<span style={{ color: secondaryColor }}>.</span>
    </Title>
  );
  return <PageHeader title={title} extra={<HeaderButtons />}></PageHeader>;

  function HeaderButtons() {
    return (
      <React.Fragment>
        <Button type="primary">Start Free Trial</Button>
        <Button
          style={{
            backgroundColor: secondaryColor,
            color: "white",
            padding: "0 2rem",
          }}
        >
          Login
        </Button>
      </React.Fragment>
    );
  }
}
