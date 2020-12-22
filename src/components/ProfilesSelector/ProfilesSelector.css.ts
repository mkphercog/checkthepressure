import styled from "styled-components";
import { Fieldset } from "../../styles/mixins/Fieldset";

export const ProfilesSelectorStyled = styled(Fieldset)`
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
