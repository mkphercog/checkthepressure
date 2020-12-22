import React from "react";
import { useSelector } from "react-redux";
import { anonymous } from "../../../common/constants";
import { ResultsInFieldset, resultNameType } from "./ResultsInFieldset";
import {
  IGlobalState,
  IPeriodicPressureTests,
} from "../../../common/interfaces";
import { COLORS } from "../../../styles/variables";
import { Wrapper, Title, Content, Exit } from "./AverageResults.css";

export enum sysDiaType {
  SYS = "SYS",
  DIA = "DIA",
}

export const AverageResults: React.FC<Props> = ({
  userID,
  periodicTest,
  close,
}) => {
  const { id, averageResults } = periodicTest;

  const userBloodPressureBasedOnAge = useSelector(
    (state: IGlobalState) =>
      state.profiles.users.find((user) => userID === user.id)
        ?.userBloodPressureBasedOnAge
  );
  const { MIN, MAX } =
    userBloodPressureBasedOnAge || anonymous.userBloodPressureBasedOnAge;

  const getSysDiaColor = (value: number, type: sysDiaType) => {
    if (value === 0) return COLORS.black;
    else if (
      (value <= MIN.SYS && type === sysDiaType.SYS) ||
      (value <= MIN.DIA && type === sysDiaType.DIA)
    )
      return COLORS.blue;
    else if (
      (value >= MAX.SYS && type === sysDiaType.SYS) ||
      (value >= MAX.DIA && type === sysDiaType.DIA)
    )
      return COLORS.red;
    return COLORS.darkGreen;
  };

  return (
    <Wrapper>
      <Title>
        <p>Podsumowanie pomiaru #{id}</p>
      </Title>
      <Content>
        <h1>Średnie wyniki</h1>
        <ResultsInFieldset
          timeOfDayName={"Rano"}
          averageResults={averageResults}
          resultName={resultNameType.morninig}
          getSysDiaColor={getSysDiaColor}
        />
        <ResultsInFieldset
          timeOfDayName={"Wieczór"}
          averageResults={averageResults}
          resultName={resultNameType.evening}
          getSysDiaColor={getSysDiaColor}
        />
        <ResultsInFieldset
          timeOfDayName={"Całkowite"}
          averageResults={averageResults}
          resultName={resultNameType.total}
          getSysDiaColor={getSysDiaColor}
        />
      </Content>
      <Exit className="fas fa-times" onClick={() => close(false)} />
    </Wrapper>
  );
};

interface Props {
  userID: number;
  periodicTest: IPeriodicPressureTests;
  close: Function;
}
