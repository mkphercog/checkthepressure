import React from "react";

import { getButtonStyles } from "./helpers";
import {
  SharedButtonIcons,
  SharedButtonStyles,
  SharedButtonType,
} from "./SharedButtonTypes";

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
  const StyledButton = getButtonStyles(styles);

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
