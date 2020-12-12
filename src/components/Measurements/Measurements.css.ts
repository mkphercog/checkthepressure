import styled from "styled-components";
import { COLORS, CORNER_RADIUS } from "../../styles/variables";

export const Wrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${COLORS.white};
  border-bottom-left-radius: ${CORNER_RADIUS};
  border-bottom-right-radius: ${CORNER_RADIUS};
  z-index: 1;
  overflow: auto;
`;

export const MeasurementsList = styled.div`
  width: 35%;
  height: 90%;
  background-color: ${COLORS.white};
  border-right: 2px solid ${COLORS.black};
`;

export const MeasurementsDetails = styled.div`
  position: relative;
  width: 65%;
  height: 90%;
  background-color: ${COLORS.white};
`;
