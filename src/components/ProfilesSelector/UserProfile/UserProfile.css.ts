import styled from "styled-components";
import { COLORS } from "../../../styles/variables";
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
`;
