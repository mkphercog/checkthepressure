import styled from "styled-components";
import { GrayButton } from "../../../styles/mixins/Buttons";
import { Fieldset } from "./../../../styles/mixins/Fieldset";
import { COLORS, TRANSITION_TIME } from "./../../../styles/variables";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 15px;
  opacity: 0.95;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const FieldsetStyled = styled(Fieldset)`
  padding-bottom: 40px;
`;

export const ControlPanel = styled.div`
  display: flex;
  padding: 5px 5px 0;
`;

export const BackArrow = styled.button`
  justify-self: flex-start;
  background-color: transparent;
  border: none;
  outline: none;

  i {
    font-size: 28px;
    color: ${COLORS.orange};

    @media (min-width: 1024px) {
      font-size: 30px;
      cursor: pointer;
      transition: ${TRANSITION_TIME};
      :hover {
        color: ${COLORS.darkGray};
      }
    }
  }
`;

export const SummaryBtn = styled(GrayButton)`
  margin-left: auto;
`;

export const PdfBtn = styled(GrayButton)`
  margin-left: 10px;
`;
