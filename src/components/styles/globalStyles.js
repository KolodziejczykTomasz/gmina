import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;      
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;  
    font-size: 1.6em; 
    font-family: 'Open Sans', 'sans-serif';   
    width: 100vw;
    max-width: 1910px; 
  }

  button {
    padding: 0;
    cursor: pointer;  
  }
  
  p {
    font-size: 16px;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
