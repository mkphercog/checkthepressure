import styled from "styled-components";
import { PDFDownloadLink } from "@react-pdf/renderer";
import {
  COLORS,
  CORNER_RADIUS,
  TRANSITION_TIME,
} from "./../../styles/variables";

export const PDFDownloadLinkStyled = styled(PDFDownloadLink)`
  margin-bottom: 15px;
  padding: 5px 10px;
  border-radius: ${CORNER_RADIUS};
  background-color: ${COLORS.darkGray};
  color: ${COLORS.white};
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    transition: ${TRANSITION_TIME};
    cursor: pointer;

    :hover {
      background-color: ${COLORS.darkGreen};
    }
  }
`;
