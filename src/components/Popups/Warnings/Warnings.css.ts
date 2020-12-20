import styled from "styled-components";
import {
  PopupWrapper,
  PopupTitleRed,
  PopupContentWrapper,
} from "./../../../styles/mixins/Popups";
import {
  COLORS,
  CORNER_RADIUS,
  TRANSITION_TIME,
} from "../../../styles/variables";

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
  justify-content: space-around;

  p {
    text-align: center;
    color: ${COLORS.black};

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }

  button {
    align-self: flex-end;
    padding: 5px 10px;
    background-color: ${COLORS.white};
    border: 2px solid ${COLORS.red};
    border-radius: ${CORNER_RADIUS};
    cursor: pointer;
    transition: ${TRANSITION_TIME};
    color: ${COLORS.red};

    i {
      font-weight: bold;

      @media (min-width: 768px) {
        font-size: 18px;
      }

      @media (min-width: 1024px) {
        font-size: 16px;
      }
    }

    :hover {
      background-color: ${COLORS.red};
      color: ${COLORS.white};
    }

    :focus {
      box-shadow: 0 0 10px ${COLORS.gray};
      outline: none;
    }
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ApplyBtn = styled.button`
  padding: 5px 10px;
  font-weight: bold;
  color: ${COLORS.green} !important;
  background-color: ${COLORS.white};
  border: 2px solid ${COLORS.green} !important;
  border-radius: ${CORNER_RADIUS};
  cursor: pointer;
  transition: ${TRANSITION_TIME};

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }

  :hover {
    background-color: ${COLORS.green} !important;
    color: ${COLORS.white} !important;
  }

  :focus {
    box-shadow: 0 0 10px ${COLORS.gray};
    outline: none;
  }
`;

export const DenyBtn = styled(ApplyBtn)`
  color: ${COLORS.red} !important;
  border: 2px solid ${COLORS.red} !important;

  :hover {
    background-color: ${COLORS.red} !important;
    color: ${COLORS.white} !important;
  }

  :focus {
    box-shadow: 0 0 10px ${COLORS.gray};
    outline: none;
  }
`;
