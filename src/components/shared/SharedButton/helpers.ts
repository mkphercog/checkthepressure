import { SharedButtonStyles } from "./SharedButtonTypes";

import {
  BasicButtonStyled,
  ApplyButtonStyled,
  DenyButtonStyled,
  DeleteButtonStyled,
  ExitButtonStyled,
  InfoButtonStyled,
} from "./SharedButton.css";

export const getButtonStyles = (styles: SharedButtonStyles) => {
  switch (styles) {
    case SharedButtonStyles.apply:
      return ApplyButtonStyled;
    case SharedButtonStyles.deny:
      return DenyButtonStyled;
    case SharedButtonStyles.delete:
      return DeleteButtonStyled;
    case SharedButtonStyles.exit:
      return ExitButtonStyled;
    case SharedButtonStyles.info:
      return InfoButtonStyled;
    default:
      return BasicButtonStyled;
  }
};
