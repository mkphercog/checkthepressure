import React from "react";
import { useSelector } from "react-redux";

import { anonymous } from "common/constants";
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

enum sysDiaType {
  SYS = "SYS",
  DIA = "DIA",
}

export enum timeOfDayType {
  morning = "morning",
  evenign = "evening",
}

interface IProps {
  userID: number;
  dailyTest: IDailyTest;
  timeOfDayType: timeOfDayType;
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
        <p>{dailyTest[timeOfDayType].timeOfDay}</p>
      </MorningEveningStyled>
      <SysDiaPuls>
        <p>
          Ciśnienie:{" "}
          <SysAndDiaColored
            color={
              dailyTest[timeOfDayType].omitted
                ? COLORS.gray
                : getSysDiaColor(dailyTest[timeOfDayType].SYS, sysDiaType.SYS)
            }
          >
            {dailyTest[timeOfDayType].SYS}
          </SysAndDiaColored>
          /
          <SysAndDiaColored
            color={
              dailyTest[timeOfDayType].omitted
                ? COLORS.gray
                : getSysDiaColor(dailyTest[timeOfDayType].DIA, sysDiaType.DIA)
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
