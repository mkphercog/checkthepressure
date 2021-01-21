import { View, Text } from "@react-pdf/renderer";

import { TimeOfDayAverageTypes } from "common/constants";

import { COLORS } from "styles/variables";
import { styles } from "common/PDF/PdfPage.styles";

interface IProps {
  averageResults: {
    morning: {
      SYS: number;
      DIA: number;
      PULSE: number;
    };
    evening: {
      SYS: number;
      DIA: number;
      PULSE: number;
    };
    total: {
      SYS: number;
      DIA: number;
      PULSE: number;
    };
  };
}

export const AverageResultsView = ({ averageResults }: IProps) => {
  const getAverage = (timeOfDay: TimeOfDayAverageTypes) => {
    return (
      <>
        <Text style={styles.boldText}>{averageResults[timeOfDay].SYS}</Text>
        <Text>/</Text>
        <Text style={styles.boldText}>
          {averageResults[timeOfDay].DIA}
        </Text>{" "}
        Puls: {averageResults[timeOfDay].PULSE}
      </>
    );
  };

  const renderAverageMorning = getAverage(TimeOfDayAverageTypes.morning);
  const renderAverageEvening = getAverage(TimeOfDayAverageTypes.evening);
  const renderAverageTotal = getAverage(TimeOfDayAverageTypes.total);

  const renderAllAverageResults = (
    <View style={styles.tableContentView}>
      <Text style={{ ...styles.tableContentText, color: COLORS.blue }}>
        {renderAverageTotal}
      </Text>
      <Text style={styles.tableContentText}>{renderAverageMorning}</Text>
      <Text style={styles.tableContentText}>{renderAverageEvening}</Text>
    </View>
  );

  return (
    <>
      <View style={styles.averageTitleView}>
        <Text style={styles.averageTitleText}>ŚREDNIE WYNIKI</Text>
      </View>
      <View style={styles.tableHeaderView}>
        <Text style={styles.tableHeaderText}>ŁĄCZNIE</Text>
        <Text style={styles.tableHeaderText}>RANO</Text>
        <Text style={styles.tableHeaderText}>WIECZÓR</Text>
      </View>
      {renderAllAverageResults}
    </>
  );
};
