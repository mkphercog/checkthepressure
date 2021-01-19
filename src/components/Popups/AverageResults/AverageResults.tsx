import React from "react";
import { useSelector } from "react-redux";

import { IGlobalState, IPeriodicPressureTests } from "common/interfaces";
import { PdfPageGenerator } from "common/PDF/PdfPageGenerator";
import { anonymous } from "common/constants";
import {
  SharedButton,
  SharedButtonIcons,
  SharedButtonStyles,
} from "components/shared/SharedButton/SharedButton";

import { ResultsInFieldset, resultNameType } from "./ResultsInFieldset";
import { PopupWrapper, PopupTitleGreen } from "styles/mixins/Popups";
import { COLORS } from "styles/variables";
import { Content } from "./AverageResults.css";

export enum sysDiaType {
  SYS = "SYS",
  DIA = "DIA",
}

interface IProps {
  userID: number;
  periodicTest: IPeriodicPressureTests;
  setIsOpenAverageResultsPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AverageResults: React.FC<IProps> = ({
  userID,
  periodicTest,
  setIsOpenAverageResultsPopup,
}) => {
  const { id, averageResults, start, end } = periodicTest;

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
    <PopupWrapper>
      <PopupTitleGreen>
        <p>Podsumowanie pomiaru #{id}</p>
      </PopupTitleGreen>
      <Content>
        <h1>Średnie wyniki</h1>
        <div>
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
            timeOfDayName={"Łącznie"}
            averageResults={averageResults}
            resultName={resultNameType.total}
            getSysDiaColor={getSysDiaColor}
          />
        </div>
        <PdfPageGenerator
          userID={userID}
          periodicID={id}
          startDate={start}
          endDate={end}
        />
      </Content>
      <SharedButton
        onClick={() => setIsOpenAverageResultsPopup(false)}
        styles={SharedButtonStyles.exit}
        icon={SharedButtonIcons.exit}
      />
    </PopupWrapper>
  );
};
