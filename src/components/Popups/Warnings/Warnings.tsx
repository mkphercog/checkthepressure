import React from "react";
import { WarningWrapper, WarningTitle, WarningMessage } from "./Warnings.css";

export const Warnings: React.FC<WarningsProps> = ({ message, close }) => (
  <WarningWrapper>
    <WarningTitle>
      <p>Uwaga!</p>
    </WarningTitle>
    <WarningMessage>
      <p>{message}</p>
      <button onClick={() => close(false)}>OK</button>
    </WarningMessage>
  </WarningWrapper>
);

interface WarningsProps {
  message: string;
  close: Function;
}
