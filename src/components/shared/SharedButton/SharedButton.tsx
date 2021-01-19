import React from "react";

import {
  BasicButtonStyled,
  ApplyButtonStyled,
  DenyButtonStyled,
  DeleteButtonStyled,
  ExitButtonStyled,
  InfoButtonStyled,
} from "./SharedButton.css";

export enum SharedButtonType {
  button = "button",
  submit = "submit",
}

export enum SharedButtonStyles {
  basic = "basic",
  apply = "apply",
  deny = "deny",
  delete = "delete",
  exit = "exit",
  info = "info",
}

export enum SharedButtonIcons {
  apply = "fas fa-check",
  deny = "fas fa-times",
  delete = "fas fa-trash",
  exit = "fas fa-times-circle",
  info = "fas fa-info-circle",
}

interface IProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  styles?: SharedButtonStyles;
  type?: SharedButtonType;
  icon?: SharedButtonIcons;
  isDisabled?: boolean;
}

export const SharedButton: React.FC<IProps> = ({
  onClick,
  type = SharedButtonType.button,
  styles = SharedButtonStyles.basic,
  icon = undefined,
  isDisabled,
  children,
}) => {
  let StyledButton = BasicButtonStyled;
  switch (styles) {
    case SharedButtonStyles.apply:
      StyledButton = ApplyButtonStyled;
      break;
    case SharedButtonStyles.deny:
      StyledButton = DenyButtonStyled;
      break;
    case SharedButtonStyles.delete:
      StyledButton = DeleteButtonStyled;
      break;
    case SharedButtonStyles.exit:
      StyledButton = ExitButtonStyled;
      break;
    case SharedButtonStyles.info:
      StyledButton = InfoButtonStyled;
      break;
  }

  return (
    <StyledButton
      onClick={(event) => onClick(event)}
      type={type}
      disabled={isDisabled}
    >
      {children || <i className={icon}></i>}
    </StyledButton>
  );
};
