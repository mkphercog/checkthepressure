import styled from "styled-components";
import { COLORS, TRANSITION_TIME } from "./../../../styles/variables";

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
