import styled from "styled-components";
import {
  COLORS,
  TRANSITION_TIME,
  CORNER_RADIUS,
} from "./../../../styles/variables";

export const BasicButtonStyled = styled.button`
  padding: 3px 10px;
  color: ${COLORS.white};
  font-size: 12px;
  text-transform: uppercase;
  background-color: ${COLORS.darkGray};
  border: none;
  border-radius: ${CORNER_RADIUS};
  outline-style: none;

  @media (min-width: 1024px) {
    font-size: 14px;
    cursor: pointer;
    transition: ${TRANSITION_TIME};

    :hover {
      background-color: ${COLORS.gray};
    }
  }

  :disabled {
    background-color: ${COLORS.grayWithOpacity};
    color: ${COLORS.lightGray};

    @media (min-width: 1024px) {
      cursor: no-drop;
    }
  }
`;
