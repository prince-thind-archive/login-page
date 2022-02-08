import "antd/dist/antd.min.css";
import SiteHeader from "./components/SiteHeader";
import MainContent from "./components/MainContent";
import ThemeContext, { themes } from "./lib/ThemeContext";

function App() {
  return (
    <ThemeContext.Provider value={themes}>
      <div className="App">
        <SiteHeader />
        <MainContent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
