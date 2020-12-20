import styled from "styled-components";
import { GrayButton } from "../../../styles/mixins";
import {
  COLORS,
  CORNER_RADIUS,
  TRANSITION_TIME,
} from "../../../styles/variables";

export const UserProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 5px;
  margin: 5px 10px;
  border-radius: ${CORNER_RADIUS};
  background-color: ${COLORS.lightGray};

  p {
    font-size: 16px;
    font-weight: bold;
  }

  i {
    color: ${COLORS.red};
  }
`;

export const UserData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid ${COLORS.gray};
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;

  i {
    font-size: 22px;
    cursor: pointer;
    transition: ${TRANSITION_TIME};
  }

  i:hover {
    transform: scale(1.2);
  }
`;
