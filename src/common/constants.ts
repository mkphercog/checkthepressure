export enum PeriodicTestStates {
  DONE = "Zakończony",
  IN_PROGRESS = "W realizacji",
}

export const emptyPeriodicTest = {
  id: 0,
  start: "",
  end: "",
  days: 0,
  state: "",
  list: [],
};

export const anonymous = {
  id: -1,
  name: "Anonim",
  age: 0,
  nextAvailablePeriodicTestID: 0,
  periodicPressureTests: [],
};
