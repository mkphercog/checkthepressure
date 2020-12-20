import styled from "styled-components";
import { COLORS, TRANSITION_TIME } from "./variables";

export const AddButton = styled.button`
  padding: 5px 6px;
  background-color: ${COLORS.green};
  border: 2px solid ${COLORS.green};
  border-radius: 50%;
  outline-style: none;

  i {
    font-size: 26px;
    color: ${COLORS.white};

    @media (min-width: 1024px) {
      font-size: 30px;
    }
  }

  @media (min-width: 1024px) {
    cursor: pointer;
    transition: ${TRANSITION_TIME};

    :hover {
      background-color: ${COLORS.orange};
      border: 2px solid ${COLORS.orange};
    }
  }

  :focus {
    border: 2px solid ${COLORS.orange};
  }

  :disabled {
    background-color: ${COLORS.gray};
    i {
      color: ${COLORS.lightGray};
    }
  }
`;
