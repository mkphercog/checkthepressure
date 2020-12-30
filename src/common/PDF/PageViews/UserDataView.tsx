import { View, Text } from "@react-pdf/renderer";
import { styles } from "./../PdfPage.styles";

export const UserDataView = ({ name, age }: IProps) => (
  <View style={styles.userDataView}>
    <Text style={styles.normalText}>
      {`Imię: `}
      <Text style={styles.boldText}>{`${name}`}</Text>
      {`, wiek: `}
      <Text style={styles.boldText}>{`${age}`}</Text>
    </Text>
  </View>
);

interface IProps {
  name: string;
  age: number;
}
