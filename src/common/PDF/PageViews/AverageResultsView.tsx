import { View, Text } from "@react-pdf/renderer";

import { COLORS } from "styles/variables";
import { styles } from "common/PDF/PdfPage.styles";

enum TimeOfDayTypes {
  morning = "morning",
  evening = "evening",
  total = "total",
}

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
  const getAverage = (timeOfDay: TimeOfDayTypes) => {
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

  const renderAverageMorning = getAverage(TimeOfDayTypes.morning);
  const renderAverageEvening = getAverage(TimeOfDayTypes.evening);
  const renderAverageTotal = getAverage(TimeOfDayTypes.total);

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
