import { Document, Page, View } from "@react-pdf/renderer";

import { IUser } from "common/interfaces";
import { anonymous } from "common/constants";
import { LogoView } from "./PageViews/LogoView";
import { UserDataView } from "./PageViews/UserDataView";
import { PeriodicTestInfoView } from "./PageViews/PeriodicTestInfoView";
import { DailyTestsTableView } from "./PageViews/DailyTestsTableView";
import { AverageResultsView } from "./PageViews/AverageResultsView";
import { FooterView } from "./PageViews/FooterView";

import { styles } from "./PdfPage.styles";

interface IProps {
  user: IUser;
  periodicID: number;
}

export const MyDocument = ({ user, periodicID }: IProps) => {
  const { name, age, periodicPressureTests } = user;
  const test = periodicPressureTests.find((test) => test.id === periodicID);
  const { start, end, list, averageResults } =
    test || anonymous.periodicPressureTests[0];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <LogoView />
        <UserDataView name={name} age={age} />
        <PeriodicTestInfoView periodicID={periodicID} start={start} end={end} />
        <DailyTestsTableView list={list} />
        <AverageResultsView averageResults={averageResults} />
        <View style={styles.freeSpaceView}></View>
        <FooterView />
      </Page>
    </Document>
  );
};
