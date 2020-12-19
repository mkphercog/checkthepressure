import styled from "styled-components";
import {
  COLORS,
  CORNER_RADIUS,
  TRANSITION_TIME,
} from "./../../../styles/variables";

export const AddUserWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 35%;
  border-radius: ${CORNER_RADIUS};
  box-shadow: 0 0 5px ${COLORS.black};

  @media (orientation: landscape) {
    width: 45%;
    height: 50%;
  }

  @media (min-width: 768px) {
    width: 40%;
    height: 45%;
  }

  @media (min-width: 768px) and (orientation: portrait) {
    width: 40%;
    height: 25%;
  }

  @media (min-width: 1024px) {
    width: 33%;
    height: 33%;
    /* max-width: 25%; */
  }
`;

export const AddUserTitle = styled.div`
  flex-basis: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.green};
  border-top-left-radius: ${CORNER_RADIUS};
  border-top-right-radius: ${CORNER_RADIUS};

  p {
    font-size: 20px;
    font-weight: bold;
    color: ${COLORS.white};
    text-transform: uppercase;

    @media (min-width: 411px) {
      font-size: 22px;
    }

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const AddUserContent = styled.div`
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

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    height: 100%;

    label {
      margin-right: 10px;
      font-size: 14px;

      @media (min-width: 411px) {
        font-size: 16px;
      }

      @media (min-width: 768px) {
        font-size: 17px;
      }
    }

    input {
      height: 30px;
      width: 60%;
      padding: 5px;
      border: none;
      border-bottom: 3px solid ${COLORS.green};
      outline-style: none;
      font-size: 16px;

      @media (min-width: 768px) {
        font-size: 17px;
      }

      @media (min-width: 1024px) {
        width: 75%;
      }
    }

    input:focus {
      font-weight: bold;
      border-bottom: 3px solid ${COLORS.orange};
    }

    select {
      color: ${COLORS.black};
      font-size: 16px;
      outline-style: none;
      border: none;
      border-bottom: 3px solid ${COLORS.green};
      cursor: pointer;

      @media (min-width: 768px) {
        font-size: 17px;
      }

      option {
        font-size: 14px;

        @media (min-width: 768px) {
          font-size: 16px;
        }
      }
    }

    select:focus {
      font-weight: bold;
      border-bottom: 3px solid ${COLORS.orange};
    }

    button {
      align-self: flex-end;
      background-color: ${COLORS.green};
      border: 2px solid ${COLORS.green};
      border-radius: 50%;
      cursor: pointer;
      transition: ${TRANSITION_TIME};
      outline-style: none;

      i {
        padding: 5px 6px;
        font-size: 26px;
        color: ${COLORS.white};

        @media (min-width: 1024px) {
          font-size: 30px;
        }
      }
    }

    button:focus {
      border: 2px solid ${COLORS.orange};
    }

    button:hover {
      background-color: ${COLORS.white};
      i {
        color: ${COLORS.green};
      }
    }
  }
`;

export const ExitButton = styled.i`
  position: absolute;
  top: 5px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-weight: bold;
  color: ${COLORS.white};
  font-size: 18px;
  cursor: pointer;
  transition: ${TRANSITION_TIME};

  @media (min-width: 411px) {
    font-size: 20px;
  }

  :hover {
    color: ${COLORS.darkGray};
  }
`;
