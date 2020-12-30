import { StyleSheet, Font } from "@react-pdf/renderer";
import OpenSansRegular from "./PDF_Fonts/OpenSans-Regular.ttf";
import OpenSansBold from "./PDF_Fonts/OpenSans-Bold.ttf";
import { COLORS } from "../../styles/variables";

Font.register({
  family: "OpenSansRegular",
  src: OpenSansRegular,
});

Font.register({
  family: "OpenSansBold",
  src: OpenSansBold,
});

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 15,
    fontFamily: "OpenSansRegular",
    backgroundColor: COLORS.white,
    color: COLORS.black,
  },
  logoView: {
    padding: "5 15",
    marginBottom: 5,
    backgroundColor: COLORS.blue,
  },
  logoText: {
    fontSize: 18,
    fontFamily: "OpenSansBold",
    color: COLORS.white,
  },
  userDataView: {
    padding: "5 10",
  },
  periodicTestInfoView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    padding: "5 10",
  },
  periodicText: {
    fontSize: 16,
    fontFamily: "OpenSansBold",
  },
  tableHeaderView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "5 0",
    marginBottom: 5,
    backgroundColor: COLORS.blue,
  },
  tableHeaderText: {
    width: "33%",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "OpenSansBold",
    color: COLORS.white,
  },
  tableContentView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "5 0",
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: COLORS.darkGray,
    backgroundColor: COLORS.white,
  },
  tableContentText: {
    width: "33%",
    fontSize: 12,
    textAlign: "center",
  },
  averageTitleView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: "5 10",
  },
  averageTitleText: {
    fontSize: 16,
    fontFamily: "OpenSansBold",
  },
  freeSpaceView: {
    flexGrow: 1,
  },
  footerView: {
    padding: "5 10",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: COLORS.darkGray,
  },
  fotterText: {
    fontSize: 10,
    textAlign: "center",
  },
  normalText: {
    fontSize: 12,
  },
  boldText: {
    fontSize: 12,
    fontFamily: "OpenSansBold",
  },
});
