import styled from "styled-components";
import {
  COLORS,
  TRANSITION_TIME,
  CORNER_RADIUS,
} from "./../../../styles/variables";

export const ApplyButtonStyled = styled.button`
  padding: 5px 10px;
  background-color: ${COLORS.green};
  border: none;
  border-radius: ${CORNER_RADIUS};
  cursor: pointer;
  transition: ${TRANSITION_TIME};
  color: ${COLORS.white};
  outline: none;

  @media (min-width: 1024px) {
    :hover {
      background-color: ${COLORS.darkGreen};
    }
  }

  :focus {
    box-shadow: 0 0 5px ${COLORS.gray};
  }

  i {
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
`;
