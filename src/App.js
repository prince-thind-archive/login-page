import "antd/dist/antd.less";
import SiteHeader from "./components/SiteHeader";
import MainContent from "./components/MainContent";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState("idle");

  return (
    <div className="App">
      <SiteHeader />
      <MainContent status={status} setStatus={setStatus} />
    </div>
  );
}

export default App;
