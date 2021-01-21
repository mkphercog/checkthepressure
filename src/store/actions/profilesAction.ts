import {
  ADD_PROFILE,
  DELETE_PROFILE,
  SET_SELECTED_USER_ID,
  ADD_PERIODIC_PRESSURE_TEST,
  DELETE_PERIODIC_PRESSURE_TEST,
  EDIT_DAILY_VALUES,
  SET_OMITTED_DAILY_TEST,
  UPDATE_NUMBER_OF_TOTAL_AND_DONE_TESTS_AND_STATE,
  CALCULATE_AVERAGE_RESULTS,
} from "store/types/";
import { IUser, IPeriodicPressureTests } from "common/interfaces";
import { TimeOfDayTypes } from "common/constants";

export const addProfile = (newProfile: IUser) => ({
  type: ADD_PROFILE,
  newUser: newProfile,
});

export const deleteProfile = (deletedProfileID: number) => ({
  type: DELETE_PROFILE,
  idToDelete: deletedProfileID,
});

export const setSelectedUserID = (id: number) => ({
  type: SET_SELECTED_USER_ID,
  selectedUserID: id,
});

export const addPeriodicPressureTest = (
  userID: number,
  newTest: IPeriodicPressureTests
) => ({
  type: ADD_PERIODIC_PRESSURE_TEST,
  userID,
  newPeriodicTest: newTest,
});

export const deletePeriodicPressureTest = (
  userID: number,
  idToDelete: number
) => ({ type: DELETE_PERIODIC_PRESSURE_TEST, userID, idToDelete });

export const editDailyValues = (
  userID: number,
  periodicID: number,
  dailyID: number,
  timeOfDay: TimeOfDayTypes,
  sys: number,
  dia: number,
  pulse: number
) => ({
  type: EDIT_DAILY_VALUES,
  userID,
  periodicID,
  dailyID,
  timeOfDay,
  sys,
  dia,
  pulse,
});

export const setOmittedDailyTest = (
  userID: number,
  periodicID: number,
  dailyID: number,
  timeOfDay: TimeOfDayTypes,
  omitted: boolean
) => ({
  type: SET_OMITTED_DAILY_TEST,
  userID,
  periodicID,
  dailyID,
  timeOfDay,
  omitted,
});

export const updateNumberOfTotalAndDoneTestsAndState = (
  userID: number,
  periodicID: number
) => ({
  type: UPDATE_NUMBER_OF_TOTAL_AND_DONE_TESTS_AND_STATE,
  userID,
  periodicID,
});

export const calculateAverageResults = (
  userID: number,
  periodicID: number
) => ({
  type: CALCULATE_AVERAGE_RESULTS,
  userID,
  periodicID,
});
