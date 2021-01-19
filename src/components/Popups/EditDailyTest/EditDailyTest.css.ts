import styled from "styled-components";
import { PopupForm } from "styles/mixins/Popups";

export const FormStyled = styled(PopupForm)`
  div {
    justify-content: center;

    input {
      width: 30%;

      @media (min-width: 1024px) {
        width: 35%;
      }
    }
  }
`;
