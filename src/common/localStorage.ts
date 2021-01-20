import { IUser } from "common/interfaces";

const LOCAL_PROFILES = "localProfiles";
const LOCAL_SELECTED_USER_ID = "localSelectedUserID";

export const updateLocalStorageProfiles = (profiles: IUser[]) =>
  localStorage.setItem(LOCAL_PROFILES, JSON.stringify(profiles));

export const checkLocalProfiles = () => {
  const isLocalList = localStorage.getItem(LOCAL_PROFILES);
  if (isLocalList === null || isLocalList === "[]") return false;
  return true;
};

export const getLocalProfiles = () =>
  JSON.parse(localStorage.getItem(LOCAL_PROFILES) || "[]");

export const setLocalEmptyProfiles = () =>
  localStorage.setItem(LOCAL_PROFILES, "[]");

export const updateLocalSelectedUserID = (id: number) =>
  localStorage.setItem(LOCAL_SELECTED_USER_ID, JSON.stringify(id));

export const getLocalSelectedUserID = () =>
  JSON.parse(localStorage.getItem(LOCAL_SELECTED_USER_ID) || "0");

export const setLocalSelectedUserID = () =>
  localStorage.setItem(LOCAL_SELECTED_USER_ID, "0");

export const configInitialStateWithLocalStorage = () => {
  const isLocalProfiles = checkLocalProfiles();
  let localProfiles: IUser[] = [];
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

  return {
    users: localProfiles,
    nextAvailableUserID: localID,
    selectedUserID: localSelectedUserID,
  };
};
