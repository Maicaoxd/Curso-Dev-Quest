import { Header } from "./components/header";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./pages/routes";
import { Provider } from "react-redux";
import store from "./components/store/store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  body {
    background-color: #1e1d2b;
    color: #ffffff;
  }

  main {
    padding: 20px 30px;
    min-height: calc(100vh - 77px);
    box-sizing: border-box;

    section {
      display: flex;
    }

    h1 {
      margin-bottom: 20px;
    }

    ul {
      list-style-type: none;
      flex-grow: 1;
    }
  }
`;

export default App;
