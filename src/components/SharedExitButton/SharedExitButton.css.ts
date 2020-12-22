import styled from "styled-components";
import { COLORS, TRANSITION_TIME } from "./../../styles/variables";

export const ExitButtonStyled = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  outline: none;

  @media (min-width: 1024px) {
    cursor: pointer;
  }

  i {
    font-size: 14px;
    color: ${COLORS.white};

    @media (min-width: 411px) {
      font-size: 15px;
    }

    @media (min-width: 768px) {
      font-size: 16px;
    }

    @media (min-width: 1024px) {
      transition: ${TRANSITION_TIME};

      :hover {
        color: ${COLORS.darkGray};
      }
    }
  }
`;
