import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; padding: 0; box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #0f0f0f;
    color: #f5f5f5;
  }

  a { color: inherit; text-decoration: none; }
`;
