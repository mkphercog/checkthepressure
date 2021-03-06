import { View, Text } from "@react-pdf/renderer";

import { COLORS } from "styles/variables";
import { styles } from "common/PDF/PdfPage.styles";

interface IProps {
  periodicID: number;
  start: string;
  end: string;
}

export const PeriodicTestInfoView = ({ periodicID, start, end }: IProps) => (
  <View style={styles.periodicTestInfoView}>
    <Text style={styles.periodicText}>
      {`Pomiar okresowy`}
      <Text style={{ color: COLORS.blue }}>{` #${periodicID}`}</Text>
    </Text>
    <Text style={styles.normalText}>{`(od ${start} do ${end})`}</Text>
  </View>
);
