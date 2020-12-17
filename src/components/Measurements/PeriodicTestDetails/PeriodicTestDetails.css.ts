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
      font-size: 16px;
      padding: 0 5px;
      text-align: center;
      color: ${COLORS.darkGray};
      font-weight: bold;

      @media (min-width: 768px) {
        font-size: 18px;
      }

      span {
        color: ${COLORS.blue};
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
      margin: 10px 0;
      overflow: auto;
    }
  }
`;

export const BackArrow = styled.i`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 28px;
  color: ${COLORS.orange};

  @media (min-width: 1024px) {
    font-size: 30px;
    cursor: pointer;
    transition: ${TRANSITION_TIME};
    :hover {
      color: ${COLORS.darkGray};
    }
  }
`;
