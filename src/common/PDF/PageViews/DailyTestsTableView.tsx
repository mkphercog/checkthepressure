import { View, Text } from "@react-pdf/renderer";

import { IDailyTest } from "common/interfaces";
import { styles } from "common/PDF/PdfPage.styles";

interface IProps {
  list: IDailyTest[];
}

export const DailyTestsTableView = ({ list }: IProps) => {
  const renderDailyTests = list.map((item) => {
    const isOmmitedMorning = item.morning.omitted ? (
      <Text style={styles.normalText}>---</Text>
    ) : (
      <>
        <Text style={styles.boldText}>{item.morning.SYS}</Text>
        <Text>/</Text>
        <Text style={styles.boldText}>{item.morning.DIA}</Text> Puls:{" "}
        {item.morning.PULSE}
      </>
    );
    const isOmmitedEvenign = item.evening.omitted ? (
      <Text style={styles.normalText}>---</Text>
    ) : (
      <>
        <Text style={styles.boldText}>{item.evening.SYS}</Text>
        <Text>/</Text>
        <Text style={styles.boldText}>{item.evening.DIA}</Text> Puls:{" "}
        {item.evening.PULSE}
      </>
    );

    return (
      <View key={item.id} style={styles.tableContentView}>
        <Text style={styles.tableContentText}>{`${item.date}`}</Text>
        <Text style={styles.tableContentText}>{isOmmitedMorning}</Text>
        <Text style={styles.tableContentText}>{isOmmitedEvenign}</Text>
      </View>
    );
  });

  return (
    <>
      <View style={styles.tableHeaderView}>
        <Text style={styles.tableHeaderText}>DATA</Text>
        <Text style={styles.tableHeaderText}>RANO</Text>
        <Text style={styles.tableHeaderText}>WIECZÓR</Text>
      </View>
      {renderDailyTests}
    </>
  );
};
