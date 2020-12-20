import styled from "styled-components";
import { COLORS, TRANSITION_TIME } from "../../../../styles/variables";
import { LiElement } from "./../../../../styles/mixins/LiElement";

export const Wrapper = styled(LiElement)`
  @media (orientation: landscape) {
    width: 55%;
  }

  @media (orientation: landscape) and (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 16px;
  color: ${COLORS.black};

  @media (min-width: 1024px) {
    font-size: 18px;
  }

  span {
    font-size: 18px;
    color: ${COLORS.blue};

    @media (min-width: 1024px) {
      font-size: 20px;
    }
  }
`;

export const Subtitle = styled.div`
  margin-bottom: 5px;
  padding: 4px 10px;
  border-bottom: 2px solid ${COLORS.blue};
  border-top: 2px solid ${COLORS.blue};

  p {
    color: ${COLORS.black};
    font-size: 12px;

    @media (min-width: 1024px) {
      font-size: 14px;
    }
    span {
      font-weight: bold;
    }
  }
`;

export const Info = styled.p`
  font-size: 12px;

  @media (min-width: 1024px) {
    font-size: 14px;
  }

  span {
    font-weight: bold;
  }
`;

export const Btns = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  width: 90%;
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 4px;

  @media (min-width: 1024px) {
    cursor: pointer;
    transition: ${TRANSITION_TIME};
    :hover {
      transform: scale(1.3);
    }
  }

  i {
    font-size: 16px;
    color: ${COLORS.red};

    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
`;
