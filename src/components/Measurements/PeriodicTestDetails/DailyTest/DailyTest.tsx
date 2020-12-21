import React from "react";
import { IDailyTest } from "./../../../../common/interfaces";
import { MorningEveningDetails, timeOfDayType } from "./MorningEveningDetails";
import { Wrapper } from "./DailyTest.css";

export const DailyTest: React.FC<IProps> = ({
  userID,
  dailyTest,
  editDailyTest,
  setOmittedDaily,
}) => {
  const { id, date } = dailyTest;

  return (
    <Wrapper>
      <h4>
        Dzień {id} - (<span>{date}</span>)
      </h4>

      <MorningEveningDetails
        userID={userID}
        dailyTest={dailyTest}
        timeOfDayType={timeOfDayType.morning}
        editDailyTest={editDailyTest}
        setOmittedDaily={setOmittedDaily}
      />

      <MorningEveningDetails
        userID={userID}
        dailyTest={dailyTest}
        timeOfDayType={timeOfDayType.evenign}
        editDailyTest={editDailyTest}
        setOmittedDaily={setOmittedDaily}
      />
    </Wrapper>
  );
};

interface IProps {
  userID: number;
  dailyTest: IDailyTest;
  editDailyTest: Function;
  setOmittedDaily: Function;
}
