import { useState } from "react";
import Holiday from "./components/Holiday";
import {Contianer} from "./styles/Container.styles";
import GlobalStyle from "./styles/Global.styles";
import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from "./styles/Themes.styles";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme ("light");
  };

  return (
    <div className="App">
      <GlobalStyle />
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Contianer>
            <Holiday changeTheme={themeToggler} themeButtonText={theme === "light" ? "Dark Mode" : "Light Mode"}/>
          </Contianer>
        </ThemeProvider>
    </div>
  );
}

export default App;
