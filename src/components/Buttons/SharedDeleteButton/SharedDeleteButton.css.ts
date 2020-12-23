import styled from "styled-components";
import { COLORS, TRANSITION_TIME } from "../../../styles/variables";

export const DeleteButtonStyled = styled.button`
  background-color: ${COLORS.transparent};
  border: none;
  outline: none;

  @media (min-width: 1024px) {
    cursor: pointer;
  }

  i {
    font-size: 16px;
    color: ${COLORS.red};

    @media (min-width: 1024px) {
      font-size: 18px;
      transition: ${TRANSITION_TIME};

      :hover {
        transform: scale(1.3);
      }
    }
  }
`;
