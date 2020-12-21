import {
  ADD_PROFILE,
  DELETE_PROFILE,
  SET_SELECTED_USER_ID,
  ADD_PERIODIC_PRESSURE_TEST,
  DELETE_PERIODIC_PRESSURE_TEST,
  EDIT_DAILY_VALUES,
  SET_OMITTED_DAILY_TEST,
  UPDATE_NUMBER_OF_TESTS_TOTAL_AND_DONE_AND_STATE,
} from "./../types/";
import {
  IUserInterface,
  IPeriodicPressureTests,
} from "./../../common/interfaces";
import { TimeOfDayStates } from "../../common/constants";

export const addProfile = (newProfile: IUserInterface) => ({
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
  preidoicID: number,
  dailyID: number,
  timeOfDay: TimeOfDayStates,
  sys: number,
  dia: number,
  pulse: number
) => ({
  type: EDIT_DAILY_VALUES,
  userID,
  preidoicID,
  dailyID,
  timeOfDay,
  sys,
  dia,
  pulse,
});

export const setOmittedDailyTest = (
  userID: number,
  preidoicID: number,
  dailyID: number,
  timeOfDay: TimeOfDayStates,
  omitted: boolean
) => ({
  type: SET_OMITTED_DAILY_TEST,
  userID,
  preidoicID,
  dailyID,
  timeOfDay,
  omitted,
});

export const updateNumbersOfTestsTotalAndDone = (
  userID: number,
  preidoicID: number
) => ({
  type: UPDATE_NUMBER_OF_TESTS_TOTAL_AND_DONE_AND_STATE,
  userID,
  preidoicID,
});
