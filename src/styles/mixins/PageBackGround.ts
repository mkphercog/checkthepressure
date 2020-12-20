import styled from "styled-components";
import { COLORS, CORNER_RADIUS } from "./../variables";

export const PageWrapperWithImageInBG = styled.div`
  flex-grow: 1;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.white};
  border-bottom-left-radius: ${CORNER_RADIUS};
  border-bottom-right-radius: ${CORNER_RADIUS};
  overflow: hidden;
  z-index: 1;

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
