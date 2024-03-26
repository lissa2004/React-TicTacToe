import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: transparent;
    font-family:'poppias', sans-serif;
    ${(props) => props.theme.media.mobile}{
      font-size:11px;
    }
  }

  body {
    background-color: ${props => props.theme.colors.primary};
  }
`;