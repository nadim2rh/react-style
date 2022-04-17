import Holiday from "./components/Holiday";
import {Contianer} from "./styles/Container.styles";
import GlobalStyle from "./styles/Global.styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Contianer>
        <Holiday />
      </Contianer>
    </div>
  );
}

export default App;
