import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
