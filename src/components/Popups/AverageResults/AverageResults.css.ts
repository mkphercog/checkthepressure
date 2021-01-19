import styled from "styled-components";
import { Fieldset } from "styles/mixins/Fieldset";
import { PopupContentWrapper } from "styles/mixins/Popups";

export const Content = styled(PopupContentWrapper)`
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
`;

export const FieldsetStyled = styled(Fieldset)`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }

  p {
    margin: 5px 15px;
    font-size: 14px;
    white-space: nowrap;

    @media (min-width: 1024px) {
      font-size: 16px;
    }

    span {
      font-weight: bold;
    }
  }
`;

export const SysAndDiaColored = styled.span`
  color: ${(props: { color: string }) => props.color};
  font-weight: bold;
`;
