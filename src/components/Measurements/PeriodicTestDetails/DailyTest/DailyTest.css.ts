import styled from "styled-components";
import { Fieldset, Legend } from "styles/mixins/Fieldset";
import { LiElement } from "styles/mixins/LiElement";
import { COLORS } from "styles/variables";

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

export const FieldsetStyled = styled(Fieldset)`
  margin-bottom: 10px;
  border-color: ${({ sys, dia, pulse }: IProps) =>
    sys > 0 && dia > 0 && pulse > 0 ? COLORS.darkGreen : COLORS.red} !important;
  border-color: ${({ omitted }: IProps) =>
    omitted ? COLORS.gray : ""} !important;
`;

export const MorningEvening = styled(Legend)`
  p {
    color: ${({ sys, dia, pulse }: IProps) =>
      sys > 0 && dia > 0 && pulse > 0 ? COLORS.darkGreen : COLORS.red};
    color: ${({ omitted }: IProps) => (omitted ? COLORS.gray : "")} !important;
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

interface IProps {
  sys: number;
  dia: number;
  pulse: number;
  omitted?: boolean;
}
