import { ADD_PROFILE, DELETE_PROFILE } from "./../types/";
import { UserInterface } from "./../../common/interfaces";

export const addProfile = (newProfile: UserInterface) => ({
  type: ADD_PROFILE,
  newUser: newProfile,
});

export const deleteProfile = (deletedProfileID: number) => ({
  type: DELETE_PROFILE,
  idToDelete: deletedProfileID,
});
