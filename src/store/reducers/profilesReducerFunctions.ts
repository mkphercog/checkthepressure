import { PeriodicTestStates } from "../../common/constants";
import { IUser } from "../../common/interfaces";
import { IAction } from "./profilesReducer";

export const addPeriodicPressureTest = (
  usersList: IUser[],
  action: IAction
) => {
  const { userID, newPeriodicTest } = action;
  return usersList.map((user) => {
    if (user.id === userID) {
      user.periodicPressureTests = [
        ...user.periodicPressureTests,
        newPeriodicTest,
      ];
      user.nextAvailablePeriodicTestID += 1;
    }
    return user;
  });
};

export const deletePeriodicPressureTest = (
  usersList: IUser[],
  action: IAction
) => {
  const { userID, idToDelete } = action;
  return usersList.map((user) => {
    if (user.id === userID) {
      user.periodicPressureTests = user.periodicPressureTests.filter(
        (test) => idToDelete !== test.id
      );
      user.nextAvailablePeriodicTestID = user.periodicPressureTests.length
        ? user.periodicPressureTests[user.periodicPressureTests.length - 1][
            "id"
          ] + 1
        : 1;
    }
    return user;
  });
};

export const editDailyTestValues = (usersList: IUser[], action: IAction) => {
  const { userID, preidoicID, dailyID, timeOfDay, sys, dia, pulse } = action;
  return usersList.map((user) => {
    if (user.id === userID) {
      user.periodicPressureTests.map((periodicTest) => {
        if (periodicTest.id === preidoicID) {
          periodicTest.list.map((daily) => {
            if (daily.id === dailyID && daily.morning.timeOfDay === timeOfDay) {
              daily.morning.SYS = sys;
              daily.morning.DIA = dia;
              daily.morning.PULSE = pulse;
            } else if (
              daily.id === dailyID &&
              daily.evening.timeOfDay === timeOfDay
            ) {
              daily.evening.SYS = sys;
              daily.evening.DIA = dia;
              daily.evening.PULSE = pulse;
            }
            return daily;
          });
        }
        return periodicTest;
      });
    }
    return user;
  });
};

export const setOmittedDailyTest = (usersList: IUser[], action: IAction) => {
  const { userID, preidoicID, dailyID, timeOfDay, omitted } = action;

  return usersList.map((user) => {
    if (user.id === userID) {
      user.periodicPressureTests.map((periodicTest) => {
        if (periodicTest.id === preidoicID) {
          periodicTest.list.map((daily) => {
            if (daily.id === dailyID && daily.morning.timeOfDay === timeOfDay) {
              daily.morning.omitted = omitted;
            } else if (
              daily.id === dailyID &&
              daily.evening.timeOfDay === timeOfDay
            ) {
              daily.evening.omitted = omitted;
            }
            return daily;
          });
        }
        return periodicTest;
      });
    }
    return user;
  });
};

export const updateNumberOfTotalAndDoneTestsAndState = (
  usersList: IUser[],
  action: IAction
) => {
  const { userID, preidoicID } = action;
  let total = 0;
  let done = 0;

  return usersList.map((user) => {
    if (user.id === userID) {
      user.periodicPressureTests.map((periodicTest) => {
        if (periodicTest.id === preidoicID) {
          periodicTest.list.forEach((daily) => {
            if (!daily.morning.omitted) total++;
            if (!daily.evening.omitted) total++;
            if (
              daily.morning.SYS !== 0 &&
              daily.morning.DIA !== 0 &&
              daily.morning.PULSE !== 0 &&
              !daily.morning.omitted
            )
              done++;
            if (
              daily.evening.SYS !== 0 &&
              daily.evening.DIA !== 0 &&
              daily.evening.PULSE !== 0 &&
              !daily.evening.omitted
            )
              done++;

            periodicTest.totalNumberOfTests = total;
            periodicTest.numberOfTestsDone = done;

            if (
              periodicTest.totalNumberOfTests === periodicTest.numberOfTestsDone
            ) {
              periodicTest.state = PeriodicTestStates.DONE;
            } else {
              periodicTest.state = PeriodicTestStates.IN_PROGRESS;
            }
            return daily;
          });
        }
        return periodicTest;
      });
    }
    return user;
  });
};
