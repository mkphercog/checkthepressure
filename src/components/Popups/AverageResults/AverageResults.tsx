import React from "react";
import { useSelector } from "react-redux";

import { IGlobalState, IPeriodicPressureTests } from "common/interfaces";
import { PdfPageGenerator } from "common/PDF/PdfPageGenerator";
import {
  anonymous,
  TimeOfDayAverageTypes,
  TimeOfDayDisplayNames,
  MeasurementSymbols,
} from "common/constants";
import { SharedButton } from "components/shared/SharedButton/SharedButton";
import {
  SharedButtonStyles,
  SharedButtonIcons,
} from "components/shared/SharedButton/SharedButtonTypes";

import { ResultsInFieldset } from "./ResultsInFieldset";
import { PopupWrapper, PopupTitleGreen } from "styles/mixins/Popups";
import { COLORS } from "styles/variables";
import { Content } from "./AverageResults.css";

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

  const getSysDiaColor = (value: number, type: MeasurementSymbols) => {
    if (value === 0) return COLORS.black;
    else if (
      (value <= MIN.SYS && type === MeasurementSymbols.sys) ||
      (value <= MIN.DIA && type === MeasurementSymbols.dia)
    )
      return COLORS.blue;
    else if (
      (value >= MAX.SYS && type === MeasurementSymbols.sys) ||
      (value >= MAX.DIA && type === MeasurementSymbols.dia)
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
            timeOfDayName={TimeOfDayDisplayNames.morning}
            averageResults={averageResults}
            resultName={TimeOfDayAverageTypes.morning}
            getSysDiaColor={getSysDiaColor}
          />
          <ResultsInFieldset
            timeOfDayName={TimeOfDayDisplayNames.evening}
            averageResults={averageResults}
            resultName={TimeOfDayAverageTypes.evening}
            getSysDiaColor={getSysDiaColor}
          />
          <ResultsInFieldset
            timeOfDayName={TimeOfDayDisplayNames.total}
            averageResults={averageResults}
            resultName={TimeOfDayAverageTypes.total}
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
