import { IPeriodicPressureTests, IUser } from "./interfaces";

export enum PeriodicTestStates {
  DONE = "Zakończono",
  IN_PROGRESS = "W realizacji",
}

export enum TimeOfDayStates {
  MORNING = "Rano",
  EVENING = "Wieczór",
}

export const emptyPeriodicTest: IPeriodicPressureTests = {
  id: 0,
  start: "",
  end: "",
  days: 0,
  state: "",
  totalNumberOfTests: 0,
  numberOfTestsDone: 0,
  averageResults: {
    morning: {
      SYS: 0,
      DIA: 0,
      PULSE: 0,
    },
    evening: {
      SYS: 0,
      DIA: 0,
      PULSE: 0,
    },
    total: {
      SYS: 0,
      DIA: 0,
      PULSE: 0,
    },
  },
  list: [],
};

export const anonymous: IUser = {
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
