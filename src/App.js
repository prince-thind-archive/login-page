import "antd/dist/antd.min.css";
import { Button, PageHeader, Typography } from "antd";

import { cyan, orange } from "@ant-design/colors";

const Title = Typography.Title;
const primaryColor = cyan[8];
const secondaryColor = orange.primary;

function App() {
  const title = (
    <Title level={3} style={{ color: primaryColor }}>
      ATools<span style={{ color: secondaryColor }}>.</span>
    </Title>
  );

  return (
    <div className="App">
      <PageHeader
        title={title}
        extra={[
          <Button
            style={{
              backgroundColor: primaryColor,
              color: "white",
              padding: "0 2rem",
            }}
          >
            Start Free Trial
          </Button>,
          <Button
            style={{
              backgroundColor: secondaryColor,
              color: "white",
              padding: "0 2rem",
            }}
          >
            Login
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
}

export default App;
