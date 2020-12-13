import { ADD_PROFILE, DELETE_PROFILE, SET_SELECTED_USER_ID } from "./../types/";
import { UserInterface } from "./../../common/interfaces";
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

let localProfiles: UserInterface[] = [];
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
  nextAvailableID: localID,
  users: localProfiles,
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
        nextAvailableID: state.nextAvailableID + 1,
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

    default:
      return state;
  }
};

interface Action {
  type: string;
  newUser: UserInterface;
  idToDelete: number;
  selectedUserID: number;
}
