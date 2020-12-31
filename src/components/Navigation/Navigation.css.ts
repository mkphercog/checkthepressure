import styled, { keyframes } from "styled-components";
import {
  COLORS,
  CORNER_RADIUS,
  TRANSITION_TIME,
} from "./../../styles/variables";

const widthWithoutMenuIcon = "640px";
const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
`;

export const Header = styled.header`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  background-color: ${COLORS.blue};
  border-top-right-radius: ${CORNER_RADIUS};
  border-top-left-radius: ${CORNER_RADIUS};
`;

export const Logo = styled.h1`
  margin-left: 10px;
  font-size: 18px;
  text-transform: uppercase;
  color: ${COLORS.white};
  animation: ${opacityAnimation} linear 0.5s;

  @media (min-width: ${widthWithoutMenuIcon}) {
    animation: none;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    margin-left: 20px;
    font-size: 28px;
    cursor: pointer;
  }

  span {
    color: ${COLORS.orange};
  }
`;

export const Nav = styled.nav`
  flex-basis: 60%;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  margin: 0 10px;
  animation: ${opacityAnimation} linear 0.5s;

  @media (min-width: ${widthWithoutMenuIcon}) {
    animation: none;
  }

  @media (min-width: 1024px) {
    margin-right: 20px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    a {
      padding: 0 15px;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: bold;
      font-size: 12px;
      color: ${COLORS.white};
      transition: ${TRANSITION_TIME};

      @media (min-width: 768px) {
        font-size: 16px;
      }

      @media (min-width: 1024px) {
        font-size: 18px;
        cursor: pointer;
        transition: ${TRANSITION_TIME};

        :hover {
          color: ${COLORS.orange};
        }
      }
    }

    .active {
      border-bottom: 3px solid ${COLORS.orange};
    }
  }
`;

export const MenuIcon = styled.i`
  margin-right: 15px;
  font-size: 22px;
  color: ${COLORS.white};
  cursor: pointer;
  animation: ${opacityAnimation} linear 0.5s;

  @media (min-width: ${widthWithoutMenuIcon}) {
    display: none;
  }
`;

export const BackArrowIcon = styled.i`
  margin-right: 15px;
  color: ${COLORS.orange};
  font-size: 25px;
  transform: rotate(180deg);
  cursor: pointer;
  animation: ${opacityAnimation} linear 0.5s;

  @media (min-width: ${widthWithoutMenuIcon}) {
    display: none;
  }
`;
