import styled from "styled-components";
import { COLORS, TRANSITION_TIME } from "../../../styles/variables";
import { LiElement } from "./../../../styles/mixins/LiElement";

export const Wrapper = styled(LiElement)``;

export const UserData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid ${COLORS.darkGray};

  p {
    font-size: 14px;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;

  i {
    color: ${COLORS.red};
    font-size: 22px;

    @media (min-width: 1024px) {
      cursor: pointer;
      transition: ${TRANSITION_TIME};

      :hover {
        transform: scale(1.2);
      }
    }
  }
`;
