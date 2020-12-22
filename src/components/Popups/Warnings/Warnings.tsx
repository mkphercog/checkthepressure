import React from "react";
import {
  Wrapper,
  Title,
  Content,
  BtnWrapper,
  ApplyBtn,
  DenyBtn,
} from "./Warnings.css";

export const Warnings: React.FC<IProps> = ({ message, setIsOpen }) => (
  <Wrapper>
    <Title>
      <p>Uwaga!</p>
    </Title>
    <Content>
      <p>{message}</p>
      <button onClick={() => setIsOpen(false)} autoFocus>
        <i className="fas fa-check"></i>
      </button>
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
        <DenyBtn
          onClick={() => {
            response(false);
            setIsOpen(false);
          }}
          autoFocus
        >
          Nie
        </DenyBtn>
        <ApplyBtn
          onClick={() => {
            response(true);
            setIsOpen(false);
          }}
        >
          Tak
        </ApplyBtn>
      </BtnWrapper>
    </Content>
  </Wrapper>
);

interface IProps {
  message: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IPropsYesNo extends IProps {
  response: Function;
}
