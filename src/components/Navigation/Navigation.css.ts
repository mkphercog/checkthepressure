import styled, { keyframes } from "styled-components";
import { COLORS, CORNER_RADIUS } from "./../../styles/variables";

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
  display: flex;
  justify-content: ${(props: { windowWidth: number }) =>
    props.windowWidth >= 640 ? "center" : "flex-end"};
  align-items: center;
  width: 100%;
  height: 7vh;
  background-color: ${COLORS.blue};
  border-top-right-radius: ${CORNER_RADIUS};
  border-top-left-radius: ${CORNER_RADIUS};

  @media (orientation: landscape) {
    height: 11vh;
  }

  @media (min-width: 1024px) {
    height: 8vh;
  }
`;

export const Logo = styled.h1`
  flex-grow: 1;
  margin-left: 20px;
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
    font-size: 28px;
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
  animation: ${opacityAnimation} linear 0.5s;

  @media (min-width: ${widthWithoutMenuIcon}) {
    animation: none;
  }

  @media (min-width: 1024px) {
    margin-right: 15px;
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
      transition: 0.5s;

      @media (min-width: 768px) {
        font-size: 16px;
      }

      @media (min-width: 1024px) {
        font-size: 18px;
      }
    }
    .active {
      border-bottom: 3px solid ${COLORS.orange};
    }

    a:hover {
      color: ${COLORS.orange};
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
  transform: rotate(180deg);
  font-size: 25px;
  cursor: pointer;
  color: ${COLORS.orange};
  animation: ${opacityAnimation} linear 0.5s;

  @media (min-width: ${widthWithoutMenuIcon}) {
    display: none;
  }
`;
