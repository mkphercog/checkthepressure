import React from "react";

import { SharedButton } from "components/shared/SharedButton/SharedButton";
import {
  SharedButtonStyles,
  SharedButtonIcons,
} from "components/shared/SharedButton/SharedButtonTypes";

import { PopupTitleBlue, PopupContentWrapper } from "styles/mixins/Popups";
import { Wrapper } from "./Information.css";

interface IProps {
  message: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Information: React.FC<IProps> = ({ message, setIsOpen }) => (
  <Wrapper>
    <PopupTitleBlue>
      <p>Informacja</p>
    </PopupTitleBlue>
    <PopupContentWrapper>
      <p>{message}</p>
      <SharedButton
        onClick={() => setIsOpen(false)}
        styles={SharedButtonStyles.apply}
        icon={SharedButtonIcons.apply}
      />
    </PopupContentWrapper>
  </Wrapper>
);
