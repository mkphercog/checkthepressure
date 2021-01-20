import React from "react";
import { useSelector } from "react-redux";

import { anonymous } from "common/constants";
import { IGlobalState } from "common/interfaces";
import { MyDocument } from "./PdfPage";

import { PDFDownloadLinkStyled } from "./PdfPageGenerator.css";

interface IProps {
  userID: number;
  periodicID: number;
  startDate: string;
  endDate: string;
}

export const PdfPageGenerator: React.FC<IProps> = ({
  userID,
  periodicID,
  startDate,
  endDate,
}) => {
  const user = useSelector((state: IGlobalState) =>
    state.profiles.users.find((user) => user.id === userID)
  );

  return (
    <PDFDownloadLinkStyled
      document={<MyDocument user={user || anonymous} periodicID={periodicID} />}
      fileName={`Pomiar ciśnienia #${periodicID} (${startDate} - ${endDate}) - ${user?.name}.pdf`}
    >
      {({ blob, url, loading, error }) =>
        loading ? "Ładowanie..." : "Wygeneruj pdf z wynikami"
      }
    </PDFDownloadLinkStyled>
  );
};
