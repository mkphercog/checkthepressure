import React from "react";
import {
  WarningWrapper,
  WarningTitle,
  WarningMessage,
  BtnWrapper,
  ApplyBtn,
  DenyBtn,
} from "./Warnings.css";

export const Warnings: React.FC<WarningsProps> = ({ message, close }) => (
  <WarningWrapper>
    <WarningTitle>
      <p>Uwaga!</p>
    </WarningTitle>
    <WarningMessage>
      <p>{message}</p>
      <button onClick={() => close(false)} autoFocus>
        <i className="fas fa-check"></i>
      </button>
    </WarningMessage>
  </WarningWrapper>
);

export const WarningsYesNo: React.FC<WarningsYesNoProps> = ({
  message,
  close,
  response,
}) => (
  <WarningWrapper>
    <WarningTitle>
      <p>Uwaga!</p>
    </WarningTitle>
    <WarningMessage>
      <p>{message}</p>
      <BtnWrapper>
        <DenyBtn
          onClick={() => {
            response(false);
            close(false);
          }}
          autoFocus
        >
          Nie
        </DenyBtn>
        <ApplyBtn
          onClick={() => {
            response(true);
            close(false);
          }}
        >
          Tak
        </ApplyBtn>
      </BtnWrapper>
    </WarningMessage>
  </WarningWrapper>
);

interface WarningsProps {
  message: string;
  close: Function;
}

interface WarningsYesNoProps {
  message: string;
  close: Function;
  response: Function;
}
