import Navbar from "./Navbar";
import GlobalStyle from "./Global-Style";
import GlobalUtility from "./Global-Utility-Style";
import Homepage from "./Homepage";
function App() {
  return (
    <div className="App">
      <Homepage>
        <GlobalStyle />
        <GlobalUtility />
        <Navbar />
      </Homepage>
    </div>
  );
}

export default App;
