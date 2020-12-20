import styled from "styled-components";
import { COLORS, CORNER_RADIUS, TRANSITION_TIME } from "../../styles/variables";

export const ProfilesSelectorStyled = styled.div`
  position: relative;
  width: 90%;
  height: 70%;
  border-radius: ${CORNER_RADIUS};
  background-color: ${COLORS.white};
  border: 2px solid ${COLORS.gray};
  opacity: 0.95;

  @media (orientation: landscape) {
    width: 70%;
    height: 80%;
  }

  @media (min-width: 768px) {
    width: 45%;
    height: 70%;
  }

  @media (min-width: 768px) and (orientation: portrait) {
    width: 45%;
    height: 60%;
  }

  @media (min-width: 1024px) {
    width: 40%;
    height: 75%;
  }
`;

export const UsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 80%;
  padding: 10px;
  overflow: auto;

  @media (orientation: landscape) {
    height: 75%;
  }

  @media (min-width: 768px) {
    height: 85%;
  }
`;

export const AddUserIcon = styled.i`
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 35px;
  color: ${COLORS.green};
  cursor: pointer;
  transition: ${TRANSITION_TIME};

  @media (min-width: 1024px) {
    :hover {
      transform: scale(1.2);
    }
  }
`;
