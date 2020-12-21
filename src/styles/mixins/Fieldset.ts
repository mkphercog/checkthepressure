import styled from "styled-components";
import { COLORS, CORNER_RADIUS } from "../variables";

export const Fieldset = styled.fieldset`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 5px;
  border: 2px solid ${COLORS.gray};
  border-radius: ${CORNER_RADIUS};
  overflow: hidden;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    height: 100%;
    margin: 10px 0;
    overflow: auto;
  }
`;

export const Legend = styled.legend`
  padding: 0 5px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: ${COLORS.darkGray};

  @media (min-width: 768px) {
    font-size: 18px;
  }

  span {
    color: ${COLORS.blue};
  }
`;
