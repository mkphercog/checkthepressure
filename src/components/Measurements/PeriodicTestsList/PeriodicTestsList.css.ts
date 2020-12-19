import styled from "styled-components";
import {
  COLORS,
  CORNER_RADIUS,
  TRANSITION_TIME,
} from "./../../../styles/variables";

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

  fieldset {
    position: relative;
    padding: 5px;
    width: 100%;
    height: 100%;
    border: 2px solid ${COLORS.gray};
    border-radius: ${CORNER_RADIUS};
    overflow: hidden;

    legend {
      font-size: 14px;
      padding: 0 5px;
      text-align: center;
      color: ${COLORS.darkGray};
      font-weight: bold;

      @media (min-width: 768px) {
        font-size: 16px;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      height: 100%;
      min-width: 100%;
      overflow: auto;
    }
  }
`;

export const AddTestBtn = styled.button`
  position: absolute;
  bottom: -10px;
  right: -10px;
  background-color: ${COLORS.green};
  border: 2px solid ${COLORS.green};
  border-radius: 50%;
  cursor: pointer;
  transition: ${TRANSITION_TIME};
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
  }

  i {
    padding: 5px 6px;
    font-size: 26px;
    color: ${COLORS.white};

    @media (min-width: 1024px) {
      font-size: 30px;
    }
  }

  :focus {
    border: 2px solid ${COLORS.orange};
  }

  @media (min-width: 1024px) {
    :hover {
      background-color: ${COLORS.white};
      i {
        color: ${COLORS.green};
      }
    }
  }

  :disabled {
    background-color: ${COLORS.gray};

    border: 2px solid ${COLORS.gray};
    i {
      color: ${COLORS.lightGray};
    }
  }
`;
