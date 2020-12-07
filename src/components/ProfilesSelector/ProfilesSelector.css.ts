import styled from "styled-components";
import { COLORS } from "../../styles/variables";

export const Wrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.white};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  z-index: 1;
`;

export const ProfilesSelectorStyled = styled.div`
  height: 50%;
  width: 50%;
  border-radius: 15px;
  padding: 20px;
  background-color: ${COLORS.white};
  border: 2px solid black;
`;
