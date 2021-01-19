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
import { TimeOfDayStates } from "common/constants";
import {
  updateLocalStorageProfiles,
  updateLocalSelectedUserID,
  configInitialStateWithLocalStorage,
} from "common/localStorage";

import {
  addPeriodicPressureTest,
  deletePeriodicPressureTest,
  editDailyTestValues,
  setOmittedDailyTest,
  updateNumberOfTotalAndDoneTestsAndState,
  calculateAverageResults,
} from "./profilesReducerFunctions";

const initialState = configInitialStateWithLocalStorage();

export const profilesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_PROFILE: {
      const updatedProfiles = [...state.users, action.newUser];
      updateLocalStorageProfiles(updatedProfiles);
      updateLocalSelectedUserID(action.newUser.id);
      return {
        ...state,
        users: updatedProfiles,
        selectedUserID: action.newUser.id,
        nextAvailableUserID: state.nextAvailableUserID + 1,
      };
    }

    case DELETE_PROFILE: {
      const updatedProfiles = state.users.filter(
        (user) => user.id !== action.idToDelete
      );
      updateLocalStorageProfiles(updatedProfiles);
      if (action.idToDelete === state.selectedUserID) {
        const availableID = updatedProfiles.length
          ? updatedProfiles[0]["id"]
          : 0;
        updateLocalSelectedUserID(availableID);
        return {
          ...state,
          users: updatedProfiles,
          selectedUserID: availableID,
        };
      }
      return {
        ...state,
        users: updatedProfiles,
      };
    }

    case SET_SELECTED_USER_ID: {
      updateLocalSelectedUserID(action.selectedUserID);
      return { ...state, selectedUserID: action.selectedUserID };
    }

    case ADD_PERIODIC_PRESSURE_TEST: {
      const updatedProfiles = addPeriodicPressureTest(state.users, action);
      updateLocalStorageProfiles(updatedProfiles);
      return { ...state, users: updatedProfiles };
    }

    case DELETE_PERIODIC_PRESSURE_TEST: {
      const updatedProfiles = deletePeriodicPressureTest(state.users, action);
      updateLocalStorageProfiles(updatedProfiles);
      return { ...state, users: updatedProfiles };
    }

    case EDIT_DAILY_VALUES: {
      const updatedProfiles = editDailyTestValues(state.users, action);
      updateLocalStorageProfiles(updatedProfiles);
      return { ...state, users: updatedProfiles };
    }

    case SET_OMITTED_DAILY_TEST: {
      const updatedProfiles = setOmittedDailyTest(state.users, action);
      updateLocalStorageProfiles(updatedProfiles);
      return { ...state, users: updatedProfiles };
    }

    case UPDATE_NUMBER_OF_TOTAL_AND_DONE_TESTS_AND_STATE: {
      const updatedProfiles = updateNumberOfTotalAndDoneTestsAndState(
        state.users,
        action
      );
      updateLocalStorageProfiles(updatedProfiles);
      return { ...state, users: updatedProfiles };
    }

    case CALCULATE_AVERAGE_RESULTS: {
      const updatedProfiles = calculateAverageResults(state.users, action);
      updateLocalStorageProfiles(updatedProfiles);
      return { ...state, users: updatedProfiles };
    }

    default:
      return state;
  }
};

export interface IAction {
  type: string;
  newUser: IUser;
  userID: number;
  selectedUserID: number;
  periodicID: number;
  dailyID: number;
  idToDelete: number;
  newPeriodicTest: IPeriodicPressureTests;
  timeOfDay: TimeOfDayStates;
  sys: number;
  dia: number;
  pulse: number;
  omitted: boolean;
}
