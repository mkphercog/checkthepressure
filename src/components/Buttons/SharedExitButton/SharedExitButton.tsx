import React from "react";
import { ExitButtonStyled } from "./SharedExitButton.css";

export const SharedExitButton: React.FC<IProps> = ({ setIsOpen }) => (
  <ExitButtonStyled onClick={() => setIsOpen(false)}>
    <i className="fas fa-times-circle"></i>
  </ExitButtonStyled>
);

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
