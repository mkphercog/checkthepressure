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
import { PeriodicTestStates } from "./../../common/constants";
import {
  updateLocalStorageProfiles,
  checkLocalProfiles,
  getLocalProfiles,
  setLocalEmptyProfiles,
  updateLocalSelectedUserID,
  getLocalSelectedUserID,
  setLocalSelectedUserID,
} from "./../../common/localStorage";

const isLocalProfiles = checkLocalProfiles();

let localProfiles: IUserInterface[] = [];
let localID = 0;
let localSelectedUserID = 0;

if (isLocalProfiles) {
  localProfiles = getLocalProfiles();
  localID = localProfiles[localProfiles.length - 1]["id"] + 1;
  localSelectedUserID = getLocalSelectedUserID();
} else {
  setLocalEmptyProfiles();
  setLocalSelectedUserID();
}

const initialState = {
  users: localProfiles,
  nextAvailableUserID: localID,
  selectedUserID: localSelectedUserID,
};

export const profilesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_PROFILE: {
      const newProfiles = [...state.users, action.newUser];
      updateLocalStorageProfiles(newProfiles);
      updateLocalSelectedUserID(action.newUser.id);
      return {
        ...state,
        nextAvailableUserID: state.nextAvailableUserID + 1,
        users: newProfiles,
        selectedUserID: action.newUser.id,
      };
    }

    case DELETE_PROFILE: {
      const newProfiles = state.users.filter(
        (user) => user.id !== action.idToDelete
      );
      updateLocalStorageProfiles(newProfiles);
      if (action.idToDelete === state.selectedUserID) {
        const availableID = newProfiles.length ? newProfiles[0]["id"] : 0;
        updateLocalSelectedUserID(availableID);
        return {
          ...state,
          users: newProfiles,
          selectedUserID: availableID,
        };
      }
      return {
        ...state,
        users: newProfiles,
      };
    }

    case SET_SELECTED_USER_ID: {
      updateLocalSelectedUserID(action.selectedUserID);
      return { ...state, selectedUserID: action.selectedUserID };
    }

    case ADD_PERIODIC_PRESSURE_TEST: {
      const updatedProfiles = state.users.map((user) => {
        if (action.userID === user.id) {
          user.periodicPressureTests = [
            ...user.periodicPressureTests,
            action.newPeriodicTest,
          ];
          user.nextAvailablePeriodicTestID += 1;
        }
        return user;
      });
      updateLocalStorageProfiles(updatedProfiles);
      return { ...state, users: updatedProfiles };
    }

    case DELETE_PERIODIC_PRESSURE_TEST: {
      const updatedProfiles = state.users.map((user) => {
        if (action.userID === user.id) {
          user.periodicPressureTests = user.periodicPressureTests.filter(
            (test) => action.idToDelete !== test.id
          );
          user.nextAvailablePeriodicTestID = user.periodicPressureTests.length
            ? user.periodicPressureTests[user.periodicPressureTests.length - 1][
                "id"
              ] + 1
            : 1;
        }
        return user;
      });
      updateLocalStorageProfiles(updatedProfiles);
      return { ...state, users: updatedProfiles };
    }

    case EDIT_DAILY_VALUES: {
      const updatedProfiles = state.users.map((user) => {
        if (action.userID === user.id) {
          user.periodicPressureTests.map((periodicTest) => {
            if (action.preidoicID === periodicTest.id) {
              periodicTest.list.map((daily) => {
                if (
                  action.dailyID === daily.id &&
                  action.timeOfDay === daily.morning.timeOfDay
                ) {
                  daily.morning.SYS = action.sys;
                  daily.morning.DIA = action.dia;
                  daily.morning.PULSE = action.pulse;
                } else if (
                  action.dailyID === daily.id &&
                  action.timeOfDay === daily.evening.timeOfDay
                ) {
                  daily.evening.SYS = action.sys;
                  daily.evening.DIA = action.dia;
                  daily.evening.PULSE = action.pulse;
                }
                return daily;
              });
            }
            return periodicTest;
          });
        }
        return user;
      });
      updateLocalStorageProfiles(updatedProfiles);
      return { ...state, users: updatedProfiles };
    }

    case SET_OMITTED_DAILY_TEST: {
      const updatedProfiles = state.users.map((user) => {
        if (action.userID === user.id) {
          user.periodicPressureTests.map((periodicTest) => {
            if (action.preidoicID === periodicTest.id) {
              periodicTest.list.map((daily) => {
                if (
                  action.dailyID === daily.id &&
                  action.timeOfDay === daily.morning.timeOfDay
                ) {
                  daily.morning.omitted = action.omitted;
                } else if (
                  action.dailyID === daily.id &&
                  action.timeOfDay === daily.evening.timeOfDay
                ) {
                  daily.evening.omitted = action.omitted;
                }
                return daily;
              });
            }
            return periodicTest;
          });
        }
        return user;
      });
      updateLocalStorageProfiles(updatedProfiles);
      return { ...state, users: updatedProfiles };
    }

    case UPDATE_NUMBER_OF_TESTS_TOTAL_AND_DONE_AND_STATE: {
      let total = 0;
      let done = 0;
      const updatedProfiles = state.users.map((user) => {
        if (action.userID === user.id) {
          user.periodicPressureTests.map((periodicTest) => {
            if (action.preidoicID === periodicTest.id) {
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
                  periodicTest.totalNumberOfTests ===
                  periodicTest.numberOfTestsDone
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
      updateLocalStorageProfiles(updatedProfiles);
      return { ...state, users: updatedProfiles };
    }

    default:
      return state;
  }
};

interface Action {
  type: string;
  newUser: IUserInterface;
  idToDelete: number;
  selectedUserID: number;
  userID: number;
  newPeriodicTest: IPeriodicPressureTests;
  preidoicID: number;
  dailyID: number;
  timeOfDay: string;
  sys: number;
  dia: number;
  pulse: number;
  omitted: boolean;
}
