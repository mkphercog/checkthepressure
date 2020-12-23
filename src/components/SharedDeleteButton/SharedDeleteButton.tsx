import React from "react";
import { DeleteButtonStyled } from "./SharedDeleteButton.css";

export const SharedDeleteButton: React.FC<IProps> = ({ deleteFunction }) => (
  <DeleteButtonStyled onClick={() => deleteFunction()}>
    <i className="fas fa-trash"></i>
  </DeleteButtonStyled>
);

interface IProps {
  deleteFunction: () => void;
}
