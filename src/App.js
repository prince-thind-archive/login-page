import "antd/dist/antd.less";
import SiteHeader from "./components/SiteHeader";
import MainContent from "./components/MainContent";

function App() {
  return (
      <div className="App">
        <SiteHeader />
        <MainContent />
      </div>
  );
}

export default App;
