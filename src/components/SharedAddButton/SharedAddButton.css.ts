import styled from "styled-components";
import {
  COLORS,
  CORNER_RADIUS,
  TRANSITION_TIME,
} from "./../../styles/variables";

export const AddButtonStyled = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: ${COLORS.transparent};
  border: 2px solid ${COLORS.transparent};
  border-radius: 50%;
  outline-style: none;

  @media (min-width: 411px) and (orientation: landscape) {
    bottom: 10px;
    right: 10px;
  }

  @media (min-width: 768px) {
    bottom: 10px;
    right: 10px;
  }

  @media (min-width: 1024px) {
    bottom: 10px;
    right: 20px;
    cursor: pointer;

    :hover > div {
      display: block;
      animation: move ${TRANSITION_TIME} both;

      @keyframes move {
        from {
          right: 0;
          opacity: 0;
        }
        to {
          right: 105%;
          opacity: 1;
        }
      }
    }
  }

  :focus {
    border: 2px solid ${COLORS.orange};
  }

  :disabled {
    :hover > div {
      display: none;
      animation: none;
    }

    i {
      color: ${COLORS.gray};

      :hover {
        color: ${COLORS.gray};
      }
    }

    @media (min-width: 1024px) {
      cursor: no-drop;
    }
  }

  div {
    display: none;
    position: absolute;
    top: 50%;
    right: 0;
    padding: 5px 10px;
    transform: translateY(-50%);
    background-color: ${COLORS.blue};
    border-radius: ${CORNER_RADIUS};

    p {
      font-size: 12px;
      font-weight: bold;
      white-space: nowrap;
      color: ${COLORS.white};
    }
  }

  i {
    font-size: 30px;
    color: ${COLORS.green};

    @media (min-width: 1024px) {
      font-size: 40px;
      transition: ${TRANSITION_TIME};

      :hover {
        color: ${COLORS.darkGreen};
      }
    }
  }
`;
