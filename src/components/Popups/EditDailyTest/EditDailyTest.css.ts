import styled from "styled-components";
import { PopupWrapper, PopupForm } from "./../../../styles/mixins/Popups";

export const Wrapper = styled(PopupWrapper)`
  width: 80%;
  height: 35%;

  @media (orientation: landscape) {
    width: 45%;
    height: 55%;
  }

  @media (min-width: 768px) {
    width: 40%;
    height: 45%;
  }

  @media (min-width: 768px) and (orientation: landscape) {
    width: 40%;
    height: 60%;
  }

  @media (min-width: 768px) and (orientation: portrait) {
    width: 40%;
    height: 25%;
  }

  @media (min-width: 1024px) {
    width: 25%;
    height: 40%;
  }
`;

export const FormStyled = styled(PopupForm)`
  div {
    width: 60%;

    @media (min-width: 1024px) {
      width: 80%;
    }

    input {
      width: 30%;

      @media (min-width: 1024px) {
        width: 35%;
      }
    }
  }

  .apply-button {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;
