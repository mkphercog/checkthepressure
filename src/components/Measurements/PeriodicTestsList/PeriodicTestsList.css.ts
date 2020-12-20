import styled from "styled-components";
import { AddButton } from "./../../../styles/mixins";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 15px;
  opacity: 0.95;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const AddTestBtn = styled(AddButton)`
  position: absolute;
  bottom: -10px;
  right: -10px;

  @media (min-width: 411px) and (orientation: landscape) {
    bottom: 10px;
    right: 10px;
  }

  @media (min-width: 768px) {
    bottom: 10px;
    right: 10px;
  }

  @media (min-width: 1024px) {
    bottom: 10px;
    right: 20px;
  }
`;
