import React from "react";
import { useSelector } from "react-redux";
import { anonymous } from "../constants";
import { IGlobalState } from "../interfaces";
import { MyDocument } from "./PdfPage";
import { PDFDownloadLinkStyled } from "./PdfPageGenerator.css";

export const PdfPageGenerator: React.FC<IProps> = ({ userID, periodicID }) => {
  const user = useSelector((state: IGlobalState) =>
    state.profiles.users.find((user) => user.id === userID)
  );

  return (
    <PDFDownloadLinkStyled
      document={<MyDocument user={user || anonymous} periodicID={periodicID} />}
      fileName={`Pomiar_okresowy_#${periodicID}_${user?.name}.pdf`}
    >
      {({ blob, url, loading, error }) =>
        loading ? "Ładowanie..." : "Wygeneruj pdf z wynikami"
      }
    </PDFDownloadLinkStyled>
  );
};

interface IProps {
  userID: number;
  periodicID: number;
}
