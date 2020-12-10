import styled from "styled-components";
import {
  COLORS,
  CORNER_RADIUS,
  TRANSITION_TIME,
} from "../../../styles/variables";

export const WarningWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 25%;
  border-radius: ${CORNER_RADIUS};
  box-shadow: 0 0 5px ${COLORS.black};

  @media (orientation: landscape) {
    width: 60%;
    height: 45%;
  }

  @media (min-width: 768px) {
    width: 60%;
    height: 20%;
  }

  @media (min-width: 1024px) {
    width: 40%;
    height: 25%;
  }
`;

export const WarningTitle = styled.div`
  flex-basis: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.red};
  border-top-left-radius: ${CORNER_RADIUS};
  border-top-right-radius: ${CORNER_RADIUS};

  p {
    font-size: 20px;
    font-weight: bold;
    color: ${COLORS.white};
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 22px;
    }
  }
`;

export const WarningMessage = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  background-color: ${COLORS.white};
  border-bottom-left-radius: ${CORNER_RADIUS};
  border-bottom-right-radius: ${CORNER_RADIUS};

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

  i {
    align-self: flex-end;
    padding: 5px 10px;
    font-weight: bold;
    color: ${COLORS.red};
    background-color: ${COLORS.white};
    border: 2px solid ${COLORS.red};
    border-radius: ${CORNER_RADIUS};
    cursor: pointer;
    transition: ${TRANSITION_TIME};

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }

  i:hover {
    background-color: ${COLORS.red};
    color: ${COLORS.white};
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
  color: ${COLORS.green};
  background-color: ${COLORS.white};
  border: 2px solid ${COLORS.green};
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
    background-color: ${COLORS.green};
    color: ${COLORS.white};
  }
`;

export const DenyBtn = styled(ApplyBtn)`
  color: ${COLORS.red};
  border: 2px solid ${COLORS.red};

  :hover {
    background-color: ${COLORS.red};
    color: ${COLORS.white};
  }
`;
