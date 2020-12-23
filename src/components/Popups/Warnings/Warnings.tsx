import React from "react";
import { SharedApplyButton } from "../../Buttons/SharedApplyButton/SharedApplyButton";
import { SharedDenyButton } from "../../Buttons/SharedDenyButton/SharedDenyButton";
import { Wrapper, Title, Content, BtnWrapper } from "./Warnings.css";

export const Warnings: React.FC<IProps> = ({ message, setIsOpen }) => (
  <Wrapper>
    <Title>
      <p>Uwaga!</p>
    </Title>
    <Content>
      <p>{message}</p>
      <SharedApplyButton setIsOpen={setIsOpen} />
    </Content>
  </Wrapper>
);

export const WarningsYesNo: React.FC<IPropsYesNo> = ({
  message,
  setIsOpen,
  response,
}) => (
  <Wrapper>
    <Title>
      <p>Uwaga!</p>
    </Title>
    <Content>
      <p>{message}</p>
      <BtnWrapper>
        <SharedDenyButton setIsOpen={setIsOpen} getResponse={response} />
        <SharedApplyButton setIsOpen={setIsOpen} getResponse={response} />
      </BtnWrapper>
    </Content>
  </Wrapper>
);

interface IProps {
  message: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IPropsYesNo extends IProps {
  response: (res: boolean) => void;
}
