import React from "react";
import { BasicButtonStyled } from "./SharedBasicButton.css";

export const SharedBasicButton: React.FC<IProps> = ({
  onClick,
  isDisabled,
  children,
}) => (
  <BasicButtonStyled onClick={onClick} disabled={isDisabled}>
    {children}
  </BasicButtonStyled>
);

interface IProps {
  onClick: () => void;
  isDisabled?: boolean;
}
