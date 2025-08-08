import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; padding: 0; box-sizing: border-box;
    //font-family: 'Poppins', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #000;
    color: #f5f5f5;
    font-family: 'Lato', sans-serif;
}

h1, h2, h3 {
  font-family: 'Montserrat', sans-serif;
}


  a { color: inherit; text-decoration: none; }
`;


