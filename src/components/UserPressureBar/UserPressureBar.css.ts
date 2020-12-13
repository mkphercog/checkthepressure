import styled from "styled-components";
import { COLORS } from "../../styles/variables";

export const Bar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 6vh;
  border-bottom: 2px solid ${COLORS.blue};
  background-color: ${COLORS.white};

  @media (min-width: 768px) and (orientation: portrait) {
    height: 3vh;
  }

  @media (min-width: 1024px) {
    height: 3vh;
  }
`;

export const UserData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (orientation: landscape) {
    width: auto;
  }

  @media (min-width: 768px) {
    width: auto;
  }

  p {
    font-size: 10px;

    @media (min-width: 411px) {
      font-size: 11px;
    }

    @media (min-width: 768px) {
      font-size: 12px;
    }

    span {
      font-weight: bold;
    }
  }
`;

export const PressureMin = styled.div`
  p {
    font-size: 10px;
    color: ${COLORS.blue};

    @media (min-width: 411px) {
      font-size: 11px;
    }

    @media (min-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const PressureNormal = styled.div`
  p {
    font-size: 10px;
    color: ${COLORS.green};
    font-weight: bold;

    @media (min-width: 411px) {
      font-size: 11px;
    }

    @media (min-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const PressureMax = styled.div`
  p {
    font-size: 10px;
    color: ${COLORS.red};

    @media (min-width: 411px) {
      font-size: 11px;
    }
  }

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;
