import styled from "styled-components";
import {
  COLORS,
  CORNER_RADIUS,
  TRANSITION_TIME,
} from "../../../../styles/variables";

export const Wrapper = styled.li`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${COLORS.lightGray};
  border-radius: ${CORNER_RADIUS};
  list-style: none;

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
  font-size: 16px;
  color: ${COLORS.black};
  margin-bottom: 10px;
  span {
    font-size: 18px;
    color: ${COLORS.blue};
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    span {
      font-size: 20px;
    }
  }
`;

export const Subtitle = styled.div`
  border-bottom: 2px solid ${COLORS.blue};
  border-top: 2px solid ${COLORS.blue};
  padding: 4px 10px;
  margin-bottom: 5px;
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

export const Duration = styled.p`
  font-size: 12px;
  span {
    font-weight: bold;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const Status = styled.p`
  font-size: 12px;
  span {
    font-weight: bold;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const Btns = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  width: 90%;
`;

export const DetailsBtn = styled.button`
  padding: 0 8px;
  font-size: 12px;
  color: ${COLORS.white};
  border: none;
  border-radius: ${CORNER_RADIUS};
  background-color: ${COLORS.gray};

  @media (min-width: 1024px) {
    font-size: 14px;
    transition: ${TRANSITION_TIME};
    cursor: pointer;
    :hover {
      color: ${COLORS.gray};
      background-color: ${COLORS.white};
    }
  }
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 4px;

  i {
    font-size: 16px;
    color: ${COLORS.red};

    @media (min-width: 1024px) {
      font-size: 18px;
      cursor: pointer;
    }
  }

  @media (min-width: 1024px) {
    transition: ${TRANSITION_TIME};
    :hover {
      transform: scale(1.3);
    }
  }
`;
