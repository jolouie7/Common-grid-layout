import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  /* grid-template-columns: repeat(4, 1fr) */
  grid-template-areas:
    "header"
    "nav"
    "content"
    "footer";

  @media (min-width: 576px) {
    grid-template-columns: 2fr 2fr;
    grid-template-areas:
      "header header"
      "nav content"
      "footer footer";
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "nav content header"
      "nav content footer";
  }
`;

export default GlobalStyles;