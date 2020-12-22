import styled from "styled-components";
import { ExitIcon } from "../../../styles/mixins/Buttons";
import { Fieldset, Legend } from "./../../../styles/mixins/Fieldset";
import {
  PopupWrapper,
  PopupTitleGreen,
  PopupContentWrapper,
} from "./../../../styles/mixins/Popups";

export const Wrapper = styled(PopupWrapper)`
  width: 95%;

  @media (orientation: landscape) {
    width: 60%;
  }

  @media (min-width: 768px) {
    width: 55%;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }

  h1 {
    margin-top: 10px;
    font-size: 18px;
  }
`;

export const Title = styled(PopupTitleGreen)`
  padding: 15px 0;
`;

export const Content = styled(PopupContentWrapper)``;

export const FieldsetStyled = styled(Fieldset)`
  display: flex;
  justify-content: space-around;
  height: auto;
  margin-bottom: 20px;

  p {
    font-size: 14px;

    @media (min-width: 1024px) {
      font-size: 16px;
    }

    span {
      font-weight: bold;
    }
  }
`;

export const LegendStyled = styled(Legend)``;

export const Exit = styled(ExitIcon)``;

export const SysAndDiaColored = styled.span`
  color: ${(props: { color: string }) => props.color};
  font-weight: bold;
`;
