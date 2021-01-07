import React from "react";
import { SharedApplyButton } from "../../Buttons/SharedApplyButton/SharedApplyButton";
import { SharedDenyButton } from "../../Buttons/SharedDenyButton/SharedDenyButton";
import {
  PopupWrapper,
  PopupTitleRed,
  PopupContentWrapper,
} from "./../../../styles/mixins/Popups";
import { BtnWrapper } from "./Warnings.css";

export const Warnings: React.FC<IProps> = ({ message, setIsOpen }) => (
  <PopupWrapper>
    <PopupTitleRed>
      <p>Uwaga!</p>
    </PopupTitleRed>
    <PopupContentWrapper>
      <p>{message}</p>
      <SharedApplyButton setIsOpen={setIsOpen} />
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
        <SharedDenyButton setIsOpen={setIsOpen} getResponse={response} />
        <SharedApplyButton setIsOpen={setIsOpen} getResponse={response} />
      </BtnWrapper>
    </PopupContentWrapper>
  </PopupWrapper>
);

interface IProps {
  message: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IPropsYesNo extends IProps {
  response: (res: boolean) => void;
}
