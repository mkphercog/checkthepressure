import styled from "styled-components";
import { COLORS, TRANSITION_TIME } from "../../../styles/variables";

export const InfoButtonStyled = styled.button`
  margin-left: 10px;
  background-color: ${COLORS.transparent};
  border: none;
  outline: none;

  @media (min-width: 1024px) {
    cursor: pointer;
  }

  i {
    font-size: 14px;
    color: ${COLORS.darkGray};

    @media (min-width: 411px) {
      font-size: 15px;
    }

    @media (min-width: 768px) {
      font-size: 19px;
    }

    @media (min-width: 1024px) {
      transition: ${TRANSITION_TIME};

      :hover {
        color: ${COLORS.gray};
      }
    }
  }
`;
