import React from "react";

import { IDailyTest } from "common/interfaces";
import { TimeOfDayTypes } from "common/constants";

import { MorningEveningDetails } from "./MorningEveningDetails";
import { Wrapper } from "./DailyTest.css";

interface IProps {
  userID: number;
  dailyTest: IDailyTest;
  editDailyTest: Function;
  setOmittedDaily: Function;
}

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
        timeOfDayType={TimeOfDayTypes.morning}
        editDailyTest={editDailyTest}
        setOmittedDaily={setOmittedDaily}
      />

      <MorningEveningDetails
        userID={userID}
        dailyTest={dailyTest}
        timeOfDayType={TimeOfDayTypes.evening}
        editDailyTest={editDailyTest}
        setOmittedDaily={setOmittedDaily}
      />
    </Wrapper>
  );
};
