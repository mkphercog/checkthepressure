import React from "react";
import { WarningWrapper, WarningTitle, WarningMessage } from "./Warnings.css";

export const Warnings: React.FC<WarningsProps> = ({ message, close }) => (
  <WarningWrapper>
    <WarningTitle>
      <p>Uwaga!</p>
    </WarningTitle>
    <WarningMessage>
      <p>{message}</p>
      <i className="fas fa-check" onClick={() => close(false)}></i>
    </WarningMessage>
  </WarningWrapper>
);

interface WarningsProps {
  message: string;
  close: Function;
}
