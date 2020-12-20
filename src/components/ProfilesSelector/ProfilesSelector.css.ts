import styled from "styled-components";
import { FieldsetStyled } from "../../styles/mixins";
import { COLORS, TRANSITION_TIME } from "../../styles/variables";

export const ProfilesSelectorStyled = styled(FieldsetStyled)`
  width: 90%;
  height: 70%;

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

  ul {
    height: 80%;

    @media (orientation: landscape) {
      height: 75%;
    }

    @media (min-width: 768px) {
      height: 85%;
    }
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
