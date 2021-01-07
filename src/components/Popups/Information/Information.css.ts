import styled from "styled-components";
import { PopupWrapper } from "../../../styles/mixins/Popups";

export const Wrapper = styled(PopupWrapper)`
  max-width: 80%;

  @media (min-width: 768px) {
    max-width: 45%;
  }
`;
