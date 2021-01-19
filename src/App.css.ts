import styled from "styled-components";
import { COLORS } from "styles/variables";

export const AppBG = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 10px 5px;
  background-color: ${COLORS.lightGray};

  @media (min-width: 1024px) {
    padding: 20px 10px 30px;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  max-width: 1250px;
  margin: 0 auto;
`;

export const AppBottomBar = styled.div`
  position: absolute;
  height: 70px;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: ${COLORS.gray};
`;
