import styled from "styled-components";
import { COLORS, TRANSITION_TIME, CORNER_RADIUS } from "./variables";

export const AddButton = styled.button`
  padding: 5px 6px;
  background-color: ${COLORS.green};
  border: 2px solid ${COLORS.green};
  border-radius: 50%;
  outline-style: none;

  i {
    font-size: 26px;
    color: ${COLORS.white};

    @media (min-width: 1024px) {
      font-size: 30px;
    }
  }

  @media (min-width: 1024px) {
    cursor: pointer;
    transition: ${TRANSITION_TIME};

    :hover {
      background-color: ${COLORS.orange};
      border: 2px solid ${COLORS.orange};
    }
  }

  :focus {
    border: 2px solid ${COLORS.orange};
  }

  :disabled {
    background-color: ${COLORS.gray};
    border: 2px solid ${COLORS.gray};
    i {
      color: ${COLORS.lightGray};
    }
  }
`;

export const GrayButton = styled.button`
  padding: 3px 10px;
  color: ${COLORS.white};
  font-size: 12px;
  text-transform: uppercase;
  background-color: ${COLORS.darkGray};
  border: none;
  border-radius: ${CORNER_RADIUS};
  outline-style: none;

  @media (min-width: 1024px) {
    font-size: 14px;
    cursor: pointer;
    transition: ${TRANSITION_TIME};

    :hover {
      background-color: ${COLORS.gray};
    }
  }
`;

export const ExitIcon = styled.i`
  position: absolute;
  top: 5px;
  right: 8px;
  font-size: 18px;
  font-weight: bold;
  color: ${COLORS.white};
  background-color: transparent;
  border: none;

  @media (min-width: 411px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
    transition: ${TRANSITION_TIME};

    :hover {
      color: ${COLORS.darkGray};
    }
  }
`;

export const PageWrapperWithImageInBG = styled.div`
  flex-grow: 1;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.white};
  border-bottom-left-radius: ${CORNER_RADIUS};
  border-bottom-right-radius: ${CORNER_RADIUS};
  overflow: hidden;
  z-index: 1;

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.15;
  }
`;
