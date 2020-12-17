import styled from "styled-components";
import {
  COLORS,
  CORNER_RADIUS,
  TRANSITION_TIME,
} from "../../../../styles/variables";

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin-bottom: 20px;
  padding: 10px;
  list-style: none;
  background-color: ${COLORS.lightGray};
  border-radius: ${CORNER_RADIUS};

  @media (orientation: landscape) {
    width: 60%;
  }

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }

  h4 {
    text-align: center;
    padding: 5px 0;

    @media (min-width: 768px) {
      font-size: 19px;
    }
  }

  fieldset {
    border-color: ${COLORS.darkGray};
    margin-bottom: 10px;
  }
`;

export const MorningEvening = styled.legend`
  p {
    color: ${COLORS.red};
  }
`;

export const SysDiaPuls = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  p {
    span {
      font-weight: bold;
    }
  }
`;

export const Btns = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5px;

  button {
    margin-top: 5px;
    padding: 3px 10px;
    font-size: 14px;
    color: ${COLORS.white};
    border: none;
    border-radius: ${CORNER_RADIUS};
    background-color: ${COLORS.gray};
    text-transform: uppercase;

    @media (min-width: 1024px) {
      font-size: 14px;
      transition: ${TRANSITION_TIME};
      cursor: pointer;
      :hover {
        color: ${COLORS.gray};
        background-color: ${COLORS.white};
      }
    }
  }
`;
