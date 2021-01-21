import React from "react";
import { useSelector } from "react-redux";

import {
  anonymous,
  TimeOfDayTypes,
  TimeOfDayDisplayNames,
  MeasurementSymbols,
} from "common/constants";
import { IDailyTest, IGlobalState } from "common/interfaces";
import { SharedButton } from "components/shared/SharedButton/SharedButton";

import { COLORS } from "styles/variables";
import {
  FieldsetStyled,
  MorningEvening as MorningEveningStyled,
  SysDiaPuls,
  SysAndDiaColored,
  Btns,
} from "./DailyTest.css";

interface IProps {
  userID: number;
  dailyTest: IDailyTest;
  timeOfDayType: TimeOfDayTypes;
  editDailyTest: Function;
  setOmittedDaily: Function;
}

export const MorningEveningDetails: React.FC<IProps> = ({
  userID,
  dailyTest,
  timeOfDayType,
  editDailyTest,
  setOmittedDaily,
}) => {
  const { id, date } = dailyTest;
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
    <FieldsetStyled
      sys={dailyTest[timeOfDayType].SYS}
      dia={dailyTest[timeOfDayType].DIA}
      pulse={dailyTest[timeOfDayType].PULSE}
      omitted={dailyTest[timeOfDayType].omitted}
    >
      <MorningEveningStyled
        sys={dailyTest[timeOfDayType].SYS}
        dia={dailyTest[timeOfDayType].DIA}
        pulse={dailyTest[timeOfDayType].PULSE}
        omitted={dailyTest[timeOfDayType].omitted}
      >
        <p>
          {timeOfDayType === TimeOfDayTypes.morning
            ? TimeOfDayDisplayNames.morning
            : TimeOfDayDisplayNames.evening}
        </p>
      </MorningEveningStyled>
      <SysDiaPuls>
        <p>
          Ciśnienie:{" "}
          <SysAndDiaColored
            color={
              dailyTest[timeOfDayType].omitted
                ? COLORS.gray
                : getSysDiaColor(
                    dailyTest[timeOfDayType].SYS,
                    MeasurementSymbols.sys
                  )
            }
          >
            {dailyTest[timeOfDayType].SYS}
          </SysAndDiaColored>
          /
          <SysAndDiaColored
            color={
              dailyTest[timeOfDayType].omitted
                ? COLORS.gray
                : getSysDiaColor(
                    dailyTest[timeOfDayType].DIA,
                    MeasurementSymbols.dia
                  )
            }
          >
            {dailyTest[timeOfDayType].DIA}
          </SysAndDiaColored>
        </p>
        <p>
          Puls: <span>{dailyTest[timeOfDayType].PULSE}</span>
        </p>
      </SysDiaPuls>
      <Btns>
        <SharedButton
          onClick={() =>
            editDailyTest(id, dailyTest[timeOfDayType].timeOfDay, date)
          }
          isDisabled={dailyTest[timeOfDayType].omitted}
        >
          Edytuj
        </SharedButton>
        <SharedButton
          onClick={() =>
            setOmittedDaily(
              id,
              dailyTest[timeOfDayType].timeOfDay,
              !dailyTest[timeOfDayType].omitted
            )
          }
        >
          {dailyTest[timeOfDayType].omitted ? "Przywróć" : "Pomiń"}
        </SharedButton>
      </Btns>
    </FieldsetStyled>
  );
};
