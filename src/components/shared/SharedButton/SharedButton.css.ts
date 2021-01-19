import styled from "styled-components";
import { COLORS, TRANSITION_TIME, CORNER_RADIUS } from "styles/variables";

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

export const DenyButtonStyled = styled(ApplyButtonStyled)`
  padding: 5px 12px;
  background-color: ${COLORS.red};

  @media (min-width: 1024px) {
    :hover {
      background-color: ${COLORS.darkRed};
    }
  }
`;

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

export const ExitButtonStyled = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: ${COLORS.transparent};
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
