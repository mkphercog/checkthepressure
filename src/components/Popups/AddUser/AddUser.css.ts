import styled from "styled-components";
import { PopupWrapper, PopupForm } from "./../../../styles/mixins/Popups";

export const Wrapper = styled(PopupWrapper)`
  width: 80%;
  height: 35%;

  @media (orientation: landscape) {
    width: 45%;
    height: 50%;
  }

  @media (min-width: 768px) {
    width: 40%;
    height: 45%;
  }

  @media (min-width: 768px) and (orientation: portrait) {
    width: 40%;
    height: 25%;
  }

  @media (min-width: 1024px) {
    width: 30%;
    height: 33%;
  }
`;

export const FormStyled = styled(PopupForm)`
  align-items: flex-start;

  .label-input {
    justify-content: flex-start;

    input {
      @media (min-width: 1024px) {
        width: 45%;
      }
    }
  }

  .apply-button {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;
