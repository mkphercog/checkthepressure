import styled from "styled-components";
import { COLORS, CORNER_RADIUS } from "./../variables";

export const PopupWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${CORNER_RADIUS};
  box-shadow: 0 0 5px ${COLORS.black};
`;

export const PopupTitleGreen = styled.div`
  flex-basis: 20%;
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

export const PopupTitleRed = styled(PopupTitleGreen)`
  background-color: ${COLORS.red};
`;

export const PopupContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  background-color: ${COLORS.white};
  border-bottom-left-radius: ${CORNER_RADIUS};
  border-bottom-right-radius: ${CORNER_RADIUS};
`;

export const PopupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

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
        width: 30%;
      }

      :focus {
        font-weight: bold;
        border-bottom: 3px solid ${COLORS.orange};
      }
    }
  }
`;

export const PopupSelect = styled.select`
  color: ${COLORS.black};
  font-size: 16px;
  outline-style: none;
  border: none;
  border-bottom: 3px solid ${COLORS.green};
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 17px;
  }

  :focus {
    font-weight: bold;
    border-bottom: 3px solid ${COLORS.orange};
  }
`;

export const PopupSelectOption = styled.option`
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
