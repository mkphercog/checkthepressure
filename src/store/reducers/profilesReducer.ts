import { ADD_PROFILE, DELETE_PROFILE } from "./../types/";
import { UserInterface } from "./../../common/interfaces";
import {
  updateLocalStorageProfiles,
  checkLocalProfiles,
  getLocalProfiles,
} from "./../../common/localStorage";

const isLocalProfiles = checkLocalProfiles();

let localProfiles: UserInterface[] = [];
let localID = 0;

if (isLocalProfiles) {
  localProfiles = getLocalProfiles();
  localID = localProfiles[localProfiles.length - 1]["id"] + 1;
} else {
  localStorage.setItem("localProfiles", "[]");
}

const initialState = {
  nextAvailableID: localID,
  users: localProfiles,
};

export const profilesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_PROFILE: {
      const newProfiles = [...state.users, action.newUser];
      updateLocalStorageProfiles(newProfiles);
      return {
        ...state,
        nextAvailableID: state.nextAvailableID + 1,
        users: newProfiles,
      };
    }
    case DELETE_PROFILE: {
      const newProfiles = state.users.filter(
        (user) => user.id !== action.idToDelete
      );
      updateLocalStorageProfiles(newProfiles);
      return { ...state, users: newProfiles };
    }
    default:
      return state;
  }
};

interface Action {
  type: string;
  newUser: UserInterface;
  idToDelete: number;
}
