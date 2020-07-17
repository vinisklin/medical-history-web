import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #e4e4e4;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  /* Tablet */
  @media (max-width: 1080px) {
    html {
      font-size: 58%;
    }
  }

  /* Mobile */
  @media (max-width: 720px) {
    html {
      font-size: 54%;
    }
  }
`;
