import { View, Text } from "@react-pdf/renderer";

import { COLORS } from "styles/variables";
import { styles } from "common/PDF/PdfPage.styles";

export const LogoView = () => (
  <View style={styles.logoView}>
    <Text style={styles.logoText}>
      BADAJ <Text style={{ color: COLORS.orange }}>CIŚNIENIE</Text>
    </Text>
  </View>
);
