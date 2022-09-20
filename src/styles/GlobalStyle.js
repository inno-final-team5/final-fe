import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  ;
  html {
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #6D6158;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: #c0b3a9;
    }
  }

  body {
    padding: 0;
    margin: 0;
  }
  ;

`;

export default GlobalStyle;
