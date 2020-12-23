import React from "react";
import { DenyButtonStyled } from "./SharedDenyButton.css";

export const SharedDenyButton: React.FC<IProps> = ({
  setIsOpen,
  getResponse,
}) => (
  <DenyButtonStyled
    onClick={() => {
      if (setIsOpen) setIsOpen(false);
      if (getResponse) getResponse(false);
    }}
  >
    <i className="fas fa-times"></i>
  </DenyButtonStyled>
);

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getResponse?: (res: boolean) => void;
}
