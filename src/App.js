import Navbar from "./Navbar";
import GlobalStyle from "./GlobalStyle";
import Homepage from "./Homepage";
function App() {
  return (
    <div className="App">
      <Homepage>
        <GlobalStyle />
        <Navbar />
      </Homepage>
    </div>
  );
}

export default App;
