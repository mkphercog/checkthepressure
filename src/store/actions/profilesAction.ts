import { ADD_PROFILE, DELETE_PROFILE, SET_SELECTED_USER_ID } from "./../types/";
import { UserInterface } from "./../../common/interfaces";

export const addProfile = (newProfile: UserInterface) => ({
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
