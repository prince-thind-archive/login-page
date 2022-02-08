import "antd/dist/antd.min.css";
import SiteHeader from "./components/SiteHeader";
import ThemeContext, { themes } from "./lib/ThemeContext";

function App() {
  return (
    <ThemeContext.Provider value={themes}>
      <div className="App">
        <SiteHeader />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
