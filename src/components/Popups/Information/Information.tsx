import React from "react";
import { SharedApplyButton } from "../../Buttons/SharedApplyButton/SharedApplyButton";
import { Wrapper, Title, Content } from "./Information.css";

export const Information: React.FC<IProps> = ({ message, setIsOpen }) => (
  <Wrapper>
    <Title>
      <p>Informacja</p>
    </Title>
    <Content>
      <p>{message}</p>
      <SharedApplyButton setIsOpen={setIsOpen} />
    </Content>
  </Wrapper>
);

interface IProps {
  message: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
