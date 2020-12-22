import styled from "styled-components";
import { Fieldset } from "./../../../styles/mixins/Fieldset";

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

export const FieldsetStyled = styled(Fieldset)`
  padding-bottom: 15px;
`;
