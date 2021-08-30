import Navbar from "./Navbar";
import GlobalStyle from "./Global-Style";
import GlobalUtility from "./Global-Utility-Style";
import Homepage from "./Homepage";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Homepage>
          <GlobalStyle />
          <GlobalUtility />
          <Navbar />
        </Homepage>
      </ThemeProvider>
    </div>
  );
}

export default App;
