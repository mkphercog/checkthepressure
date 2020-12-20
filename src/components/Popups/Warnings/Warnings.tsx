import React from "react";
import {
  Wrapper,
  Title,
  Content,
  BtnWrapper,
  ApplyBtn,
  DenyBtn,
} from "./Warnings.css";

export const Warnings: React.FC<WarningsProps> = ({ message, close }) => (
  <Wrapper>
    <Title>
      <p>Uwaga!</p>
    </Title>
    <Content>
      <p>{message}</p>
      <button onClick={() => close(false)} autoFocus>
        <i className="fas fa-check"></i>
      </button>
    </Content>
  </Wrapper>
);

export const WarningsYesNo: React.FC<WarningsYesNoProps> = ({
  message,
  close,
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
            close(false);
          }}
          autoFocus
        >
          Nie
        </DenyBtn>
        <ApplyBtn
          onClick={() => {
            response(true);
            close(false);
          }}
        >
          Tak
        </ApplyBtn>
      </BtnWrapper>
    </Content>
  </Wrapper>
);

interface WarningsProps {
  message: string;
  close: Function;
}

interface WarningsYesNoProps {
  message: string;
  close: Function;
  response: Function;
}
