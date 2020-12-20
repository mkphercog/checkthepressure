import React from "react";
import { useSelector } from "react-redux";
import { anonymous } from "../../../../common/constants";
import { COLORS } from "../../../../styles/variables";
import { IDailyTest, IGlobalState } from "./../../../../common/interfaces";
import {
  Wrapper,
  MorningEvening,
  FieldsetStyled,
  SysDiaPuls,
  SysAndDiaColored,
  Btns,
  Btn,
} from "./DailyTest.css";

enum sysDiaType {
  SYS = "SYS",
  DIA = "DIA",
}

export const DailyTest: React.FC<Props> = ({
  userID,
  dailyTest,
  editDailyTest,
}) => {
  const { id, date, morning, evening } = dailyTest;
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
      <h4>
        Dzień {id} - (<span>{date}</span>)
      </h4>

      <FieldsetStyled sys={morning.SYS} dia={morning.DIA} pulse={morning.PULSE}>
        <MorningEvening
          sys={morning.SYS}
          dia={morning.DIA}
          pulse={morning.PULSE}
        >
          <p>{morning.timeOfDay}</p>
        </MorningEvening>
        <SysDiaPuls>
          <p>
            SYS:{" "}
            <SysAndDiaColored
              color={getSysDiaColor(morning.SYS, sysDiaType.SYS)}
            >
              {morning.SYS}
            </SysAndDiaColored>
          </p>
          <p>
            DIA:{" "}
            <SysAndDiaColored
              color={getSysDiaColor(morning.DIA, sysDiaType.DIA)}
            >
              {morning.DIA}
            </SysAndDiaColored>
          </p>
          <p>
            PULS: <span>{morning.PULSE}</span>
          </p>
        </SysDiaPuls>
        <Btns>
          <Btn onClick={() => editDailyTest(id, morning.timeOfDay, date)}>
            Edytuj
          </Btn>
          <Btn onClick={() => {}}>Pomiń</Btn>
        </Btns>
      </FieldsetStyled>

      <FieldsetStyled sys={evening.SYS} dia={evening.DIA} pulse={evening.PULSE}>
        <MorningEvening
          sys={evening.SYS}
          dia={evening.DIA}
          pulse={evening.PULSE}
        >
          <p>{evening.timeOfDay}</p>
        </MorningEvening>
        <SysDiaPuls>
          <p>
            SYS:{" "}
            <SysAndDiaColored
              color={getSysDiaColor(evening.SYS, sysDiaType.SYS)}
            >
              {evening.SYS}
            </SysAndDiaColored>
          </p>
          <p>
            DIA:{" "}
            <SysAndDiaColored
              color={getSysDiaColor(evening.DIA, sysDiaType.DIA)}
            >
              {evening.DIA}
            </SysAndDiaColored>
          </p>
          <p>
            PULS: <span>{evening.PULSE}</span>
          </p>
        </SysDiaPuls>
        <Btns>
          <Btn onClick={() => editDailyTest(id, evening.timeOfDay, date)}>
            Edytuj
          </Btn>
          <Btn onClick={() => {}}>Pomiń</Btn>
        </Btns>
      </FieldsetStyled>
    </Wrapper>
  );
};

interface Props {
  userID: number;
  dailyTest: IDailyTest;
  editDailyTest: Function;
}
