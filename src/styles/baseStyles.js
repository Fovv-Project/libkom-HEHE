import { createGlobalStyle } from "styled-components";
import Colors from "./colors";
export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
  font-size: 100%;

  @media (max-width: 1024px) {
    font-size: 75%;
  }

  @media (max-width: 428px) {
    font-size: 50%;
  }
}

  html,
  body {
    height: 100%;
  }

  html {
    font-family: 'Inter', sans-serif;
  }

  body {
    
    font-style: normal;
    font-size: 1.6rem;
    line-height: 1.6;
    color: #2A2A2A;
    background-color: ${Colors.Primary};
  }

  ul {
    list-style: none;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  .container {
    margin: 0 auto;

    @media (max-width: 1440px) {
      margin: 0 10rem;
    }
    @media (max-width: 1024px) {
      margin: 0 5rem;
    }
    @media (max-width: 768px) {
      margin: 0 4rem;
    }
    @media (max-width: 428px) {
      margin: 0 2rem;
    }
  }

  button {
    font-family: 'Inter', sans-serif;
  }
`;
