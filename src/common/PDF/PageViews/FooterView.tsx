import { View, Text } from "@react-pdf/renderer";
import { styles } from "./../PdfPage.styles";

export const FooterView = () => (
  <View style={styles.footerView}>
    <Text style={styles.fotterText}>
      Wygenerowano za pomocą strony Badaj Ciśnienie
      (https://mkphercog.github.io/checkthepressure/), niniejszy dokument jest
      tylko zapisem okresowego pomiaru ciśnienia krwi pacjenta. Wszelkie
      oznaczenia kolorystyczne używane na stronie (min, norma, max - względem
      wieku) są tylko poglądowe i nie zastąpią konsultacji z lekarzem
      prowadzącym. Autor strony: Marcin Hercog
    </Text>
  </View>
);
