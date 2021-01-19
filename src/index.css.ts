import { createGlobalStyle } from "styled-components";
import { COLORS, CORNER_RADIUS } from "styles/variables";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

  @media (min-width: 1024px) {
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px #aaa;
      border-radius: ${CORNER_RADIUS};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: ${CORNER_RADIUS};
      background-color: ${COLORS.gray};
    }
  }
} 
`;
