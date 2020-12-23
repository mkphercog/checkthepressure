import styled from "styled-components";
import { ApplyButtonStyled } from "../SharedApplyButton/SharedApplyButton.css";
import { COLORS } from "../../../styles/variables";

export const DenyButtonStyled = styled(ApplyButtonStyled)`
  padding: 5px 12px;
  background-color: ${COLORS.red};

  @media (min-width: 1024px) {
    :hover {
      background-color: ${COLORS.darkRed};
    }
  }
`;
