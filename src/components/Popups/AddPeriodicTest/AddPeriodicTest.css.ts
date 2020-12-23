import styled from "styled-components";
import { PopupWrapper, PopupForm } from "./../../../styles/mixins/Popups";

export const Wrapper = styled(PopupWrapper)`
  width: 90%;
  height: 35%;

  @media (orientation: landscape) {
    width: 60%;
    height: 55%;
  }

  @media (min-width: 768px) and (orientation: landscape) {
    width: 55%;
    height: 50%;
  }

  @media (min-width: 768px) and (orientation: portrait) {
    width: 55%;
    height: 25%;
  }

  @media (min-width: 1024px) {
    width: 38%;
    height: 33%;
  }

  @media (min-width: 1250px) {
    width: 30%;
    height: 33%;
  }
`;

export const FormStyled = styled(PopupForm)`
  align-items: flex-start;
  div {
    flex-wrap: wrap;
    justify-content: flex-start;

    input {
      width: 60%;
    }
  }

  .apply-button {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;
