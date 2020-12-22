import React from "react";
import { AddButtonStyled } from "./SharedAddButton.css";

export const SharedAddButton: React.FC<IProps> = ({
  addFunction,
  hoverDescription,
  disabled,
}) => (
  <AddButtonStyled onClick={() => addFunction()} disabled={disabled}>
    <div>
      <p>{hoverDescription}</p>
    </div>
    <i className="fas fa-plus-circle"></i>
  </AddButtonStyled>
);

interface IProps {
  addFunction: Function;
  hoverDescription: string;
  disabled?: boolean;
}
