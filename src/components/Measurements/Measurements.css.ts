import styled from "styled-components";
import { COLORS, CORNER_RADIUS } from "../../styles/variables";

export const Wrapper = styled.div`
  position: relative;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${COLORS.white};
  border-bottom-left-radius: ${CORNER_RADIUS};
  border-bottom-right-radius: ${CORNER_RADIUS};
  z-index: 1;
  overflow: hidden;

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.15;
  }
`;
