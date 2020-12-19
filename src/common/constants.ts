export enum PeriodicTestStates {
  DONE = "Zakończony",
  IN_PROGRESS = "W realizacji",
}

export enum TimeOfDayStates {
  MORNING = "Rano",
  EVENING = "Wieczór",
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
  userBloodPressureBasedOnAge: {
    MIN: { SYS: 0, DIA: 0 },
    NORMAL: { SYS: 0, DIA: 0 },
    MAX: { SYS: 0, DIA: 0 },
  },
  nextAvailablePeriodicTestID: 0,
  periodicPressureTests: [],
};
