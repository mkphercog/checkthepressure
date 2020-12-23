import styled from "styled-components";
import {
  PopupWrapper,
  PopupTitleRed,
  PopupContentWrapper,
} from "./../../../styles/mixins/Popups";
import { COLORS } from "../../../styles/variables";

export const Wrapper = styled(PopupWrapper)`
  width: 80%;
  height: 25%;

  @media (orientation: landscape) {
    width: 60%;
    height: 45%;
  }

  @media (min-width: 768px) {
    width: 50%;
    height: 20%;
  }

  @media (min-width: 768px) and (orientation: landscape) {
    width: 50%;
    height: 40%;
  }

  @media (min-width: 1024px) {
    width: 30%;
    height: 25%;
  }
`;

export const Title = styled(PopupTitleRed)`
  flex-basis: 30%;
`;

export const Content = styled(PopupContentWrapper)`
  p {
    display: block;
    width: 100%;
    text-align: center;
    color: ${COLORS.black};

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
