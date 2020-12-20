import styled from "styled-components";
import { GrayButton } from "./../../../../styles/mixins/Buttons";
import {
  FieldsetStyled,
  LegendStyled,
} from "./../../../../styles/mixins/Fieldset";
import { LiElement } from "./../../../../styles/mixins/LiElement";
import { COLORS } from "../../../../styles/variables";

export const Wrapper = styled(LiElement)`
  @media (orientation: landscape) {
    width: 60%;
  }

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }

  h4 {
    text-align: center;
    padding: 5px 0;

    @media (min-width: 768px) {
      font-size: 19px;
    }
  }
`;

export const Fieldset = styled(FieldsetStyled)`
  margin-bottom: 10px;
  border-color: ${({ sys, dia, pulse }: Props) =>
    sys > 0 && dia > 0 && pulse > 0 ? COLORS.darkGreen : COLORS.red} !important;
  border-color: ${({ omitted }: Props) =>
    omitted ? COLORS.gray : ""} !important;
`;

export const MorningEvening = styled(LegendStyled)`
  p {
    color: ${({ sys, dia, pulse }: Props) =>
      sys > 0 && dia > 0 && pulse > 0 ? COLORS.darkGreen : COLORS.red};
    color: ${({ omitted }: Props) => (omitted ? COLORS.gray : "")} !important;
  }
`;

export const SysDiaPuls = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  p {
    span {
      font-weight: bold;
    }
  }
`;

export const SysAndDiaColored = styled.span`
  color: ${(props: { color: string }) => props.color};
  font-weight: bold;
`;

export const Btns = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Btn = styled(GrayButton)`
  margin-top: 5px;
`;

interface Props {
  sys: number;
  dia: number;
  pulse: number;
  omitted?: boolean;
}
