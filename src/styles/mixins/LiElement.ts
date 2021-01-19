import styled from "styled-components";
import { COLORS, CORNER_RADIUS } from "styles/variables";

export const LiElement = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-bottom: 20px;
  padding: 10px;
  list-style: none;
  background-color: ${COLORS.lightGray};
  border-radius: ${CORNER_RADIUS};
  list-style: none;
`;
