import React from "react";

import {
  SharedButton,
  SharedButtonStyles,
  SharedButtonIcons,
} from "components/shared/SharedButton/SharedButton";

import {
  PopupWrapper,
  PopupTitleRed,
  PopupContentWrapper,
} from "styles/mixins/Popups";
import { BtnWrapper } from "./Warnings.css";

interface IProps {
  message: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IPropsYesNo extends IProps {
  response: (res: boolean) => void;
}

export const Warnings: React.FC<IProps> = ({ message, setIsOpen }) => (
  <PopupWrapper>
    <PopupTitleRed>
      <p>Uwaga!</p>
    </PopupTitleRed>
    <PopupContentWrapper>
      <p>{message}</p>
      <SharedButton
        onClick={() => {
          setIsOpen(false);
        }}
        styles={SharedButtonStyles.apply}
        icon={SharedButtonIcons.apply}
      />
    </PopupContentWrapper>
  </PopupWrapper>
);

export const WarningsYesNo: React.FC<IPropsYesNo> = ({
  message,
  setIsOpen,
  response,
}) => (
  <PopupWrapper>
    <PopupTitleRed>
      <p>Uwaga!</p>
    </PopupTitleRed>
    <PopupContentWrapper>
      <p>{message}</p>
      <BtnWrapper>
        <SharedButton
          onClick={() => {
            setIsOpen(false);
            response(false);
          }}
          styles={SharedButtonStyles.deny}
          icon={SharedButtonIcons.deny}
        />
        <SharedButton
          onClick={() => {
            setIsOpen(false);
            response(true);
          }}
          styles={SharedButtonStyles.apply}
          icon={SharedButtonIcons.apply}
        />
      </BtnWrapper>
    </PopupContentWrapper>
  </PopupWrapper>
);
