import styled from "styled-components";
import { COLORS, TRANSITION_TIME } from "../../styles/variables";

export const Bar = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 4px 0;
  border-bottom: 2px solid ${COLORS.blue};
  background-color: ${COLORS.white};
  animation: show ${TRANSITION_TIME} linear both;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const UserData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;

  @media (orientation: landscape) {
    width: auto;
    margin-bottom: 0;
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
    color: ${COLORS.darkGreen};
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
