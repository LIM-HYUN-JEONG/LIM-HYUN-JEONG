import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table{
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
  }

  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *{
    box-sizing: border-box;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }

  @media only screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 10px;
    }
  }
`;

export default GlobalStyle;
