import { Button, PageHeader, Typography } from "antd";
import React, { useContext } from "react";
import ThemeContext from "../lib/ThemeContext";

const { Title } = Typography;

export default function SiteHeader() {
  const theme = useContext(ThemeContext);
  const { primary: primaryColor, secondary: secondaryColor } = theme;
  const title = (
    <Title level={3} style={{ color: primaryColor }}>
      ATools<span style={{ color: secondaryColor }}>.</span>
    </Title>
  );
  return <PageHeader title={title} extra={<HeaderButtons />}></PageHeader>;

  function HeaderButtons() {
    return (
      <React.Fragment>
        <Button
          style={{
            backgroundColor: primaryColor,
            color: "white",
            padding: "0 2rem",
          }}
        >
          Start Free Trial
        </Button>
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
