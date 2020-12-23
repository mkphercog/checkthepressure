import React from "react";
import { ApplyButtonStyled } from "./SharedApplyButton.css";

export enum SharedApplyButtonType {
  submit = "submit",
  basic = "button",
}

export const SharedApplyButton: React.FC<IProps> = ({
  type = SharedApplyButtonType.basic,
  setIsOpen,
  getResponse,
  submitFunction,
}) => (
  <ApplyButtonStyled
    onClick={(e) => {
      if (setIsOpen) setIsOpen(false);
      if (getResponse) getResponse(true);
      if (submitFunction) submitFunction(e);
    }}
    type={type}
  >
    <i className="fas fa-check"></i>
  </ApplyButtonStyled>
);

interface IProps {
  type?: SharedApplyButtonType;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  getResponse?: (res: boolean) => void;
  submitFunction?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
