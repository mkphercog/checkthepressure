import React from "react";
import { SharedApplyButton } from "../../Buttons/SharedApplyButton/SharedApplyButton";
import {
  PopupTitleBlue,
  PopupContentWrapper,
} from "../../../styles/mixins/Popups";
import { Wrapper } from "./Information.css";

export const Information: React.FC<IProps> = ({ message, setIsOpen }) => (
  <Wrapper>
    <PopupTitleBlue>
      <p>Informacja</p>
    </PopupTitleBlue>
    <PopupContentWrapper>
      <p>{message}</p>
      <SharedApplyButton setIsOpen={setIsOpen} />
    </PopupContentWrapper>
  </Wrapper>
);

interface IProps {
  message: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
