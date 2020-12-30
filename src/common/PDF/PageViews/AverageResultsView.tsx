import { View, Text } from "@react-pdf/renderer";
import { styles } from "./../PdfPage.styles";

enum PropNames {
  morning = "morning",
  evening = "evening",
  total = "total",
}

export const AverageResultsView = ({ averageResults }: IProps) => {
  const getAverage = (prop: PropNames) => {
    return (
      <>
        <Text style={styles.boldText}>{averageResults[prop].SYS}</Text>
        <Text>/</Text>
        <Text style={styles.boldText}>
          {averageResults[prop].DIA}
        </Text> Puls: {averageResults[prop].PULSE}
      </>
    );
  };

  const renderAverageMorning = getAverage(PropNames.morning);
  const renderAverageEvening = getAverage(PropNames.evening);
  const renderAverageTotal = getAverage(PropNames.total);

  const renderAllAverageResults = (
    <View style={styles.tableContentView}>
      <Text style={styles.tableContentText}>{renderAverageMorning}</Text>
      <Text style={styles.tableContentText}>{renderAverageEvening}</Text>
      <Text style={styles.tableContentText}>{renderAverageTotal}</Text>
    </View>
  );

  return (
    <>
      <View style={styles.averageTitleView}>
        <Text style={styles.averageTitleText}>ŚREDNIE WYNIKI</Text>
      </View>
      <View style={styles.tableHeaderView}>
        <Text style={styles.tableHeaderText}>RANO</Text>
        <Text style={styles.tableHeaderText}>WIECZÓR</Text>
        <Text style={styles.tableHeaderText}>ŁĄCZNIE</Text>
      </View>
      {renderAllAverageResults}
    </>
  );
};

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
