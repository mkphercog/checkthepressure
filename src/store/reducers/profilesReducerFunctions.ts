import { PeriodicTestStates } from "common/constants";
import { IUser } from "common/interfaces";

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
  const { userID, periodicID, dailyID, timeOfDay, sys, dia, pulse } = action;
  return usersList.map((user) => {
    if (user.id === userID) {
      user.periodicPressureTests.map((periodicTest) => {
        if (periodicTest.id === periodicID) {
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
  const { userID, periodicID, dailyID, timeOfDay, omitted } = action;

  return usersList.map((user) => {
    if (user.id === userID) {
      user.periodicPressureTests.map((periodicTest) => {
        if (periodicTest.id === periodicID) {
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
  const { userID, periodicID } = action;
  let total = 0;
  let done = 0;

  return usersList.map((user) => {
    if (user.id === userID) {
      user.periodicPressureTests.map((periodicTest) => {
        if (periodicTest.id === periodicID) {
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

const calculateAverageValue = (arr: number[]) => {
  if (arr.length === 0) return 0;
  else if (arr.length === 1) return arr[0];
  return Math.round(arr.reduce((acu, value) => acu + value) / arr.length);
};

export const calculateAverageResults = (
  usersList: IUser[],
  action: IAction
) => {
  const { userID, periodicID } = action;
  const morningValuesOfSys: number[] = [];
  const morningValuesOfDia: number[] = [];
  const morningValuesOfPulse: number[] = [];
  const eveningValuesOfSys: number[] = [];
  const eveningValuesOfDia: number[] = [];
  const eveningValuesOfPulse: number[] = [];

  return usersList.map((user) => {
    if (user.id === userID) {
      user.periodicPressureTests.map((periodicTest) => {
        if (periodicTest.id === periodicID) {
          periodicTest.list.forEach((daily) => {
            if (!daily.morning.omitted) {
              morningValuesOfSys.push(daily.morning.SYS);
              morningValuesOfDia.push(daily.morning.DIA);
              morningValuesOfPulse.push(daily.morning.PULSE);
            }
            if (!daily.evening.omitted) {
              eveningValuesOfSys.push(daily.evening.SYS);
              eveningValuesOfDia.push(daily.evening.DIA);
              eveningValuesOfPulse.push(daily.evening.PULSE);
            }
          });
          periodicTest.averageResults.morning.SYS = calculateAverageValue(
            morningValuesOfSys
          );
          periodicTest.averageResults.morning.DIA = calculateAverageValue(
            morningValuesOfDia
          );
          periodicTest.averageResults.morning.PULSE = calculateAverageValue(
            morningValuesOfPulse
          );
          periodicTest.averageResults.evening.SYS = calculateAverageValue(
            eveningValuesOfSys
          );
          periodicTest.averageResults.evening.DIA = calculateAverageValue(
            eveningValuesOfDia
          );
          periodicTest.averageResults.evening.PULSE = calculateAverageValue(
            eveningValuesOfPulse
          );
          periodicTest.averageResults.total.SYS = calculateAverageValue([
            ...morningValuesOfSys,
            ...eveningValuesOfSys,
          ]);
          periodicTest.averageResults.total.DIA = calculateAverageValue([
            ...morningValuesOfDia,
            ...eveningValuesOfDia,
          ]);
          periodicTest.averageResults.total.PULSE = calculateAverageValue([
            ...morningValuesOfPulse,
            ...eveningValuesOfPulse,
          ]);
        }
        return periodicTest;
      });
    }
    return user;
  });
};
