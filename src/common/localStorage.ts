import { UserInterface } from "./interfaces";

const LOCAL_PROFILES = "localProfiles";

export const updateLocalStorageProfiles = (profiles: UserInterface[]) =>
  localStorage.setItem(LOCAL_PROFILES, JSON.stringify(profiles));

export const checkLocalProfiles = () => {
  const isLocalList = localStorage.getItem(LOCAL_PROFILES);
  if (isLocalList === null || isLocalList === "[]") return false;
  return true;
};

export const getLocalProfiles = () =>
  JSON.parse(localStorage.getItem(LOCAL_PROFILES) || "[]");
