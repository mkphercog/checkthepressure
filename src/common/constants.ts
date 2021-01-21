import { IPeriodicPressureTests, IUser } from "common/interfaces";

export enum PeriodicTestStates {
  DONE = "Zakończono",
  IN_PROGRESS = "W realizacji",
}

export enum TimeOfDayTypes {
  morning = "morning",
  evening = "evening",
}

export enum TimeOfDayAverageTypes {
  morning = "morning",
  evening = "evening",
  total = "total",
}

export const TimeOfDayDisplayNames = {
  morning: "Rano",
  evening: "Wieczór",
  total: "Łącznie",
};

export enum MeasurementSymbols {
  sys = "sys",
  dia = "dia",
  pulse = "pulse",
}

export const MAX_SYS_DIA_PULSE_VALUE = 250;
export const NAME_MAX_CHARS = 15;
export const MAX_AGE = 150;

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

export const TEST_VALUES_INFO = {
  SYS:
    "SYS (Systole) - oznacza ciśnienie skurczowe, wartość przed ukośnikiem. Przykładowo w wyniku 120/70, wartość 120 będzie wartością SYS.",
  DIA:
    "DIA (Diastole) - oznacza ciśnienie rozkurczowe, wartość po ukośniku. Przykładowo w wyniku 120/70, wartość 70 będzie wartością DIA.",
  PULSE:
    "PULS (Tętno) - mierząc puls, określamy liczbę uderzeń serca w ciągu jednej minuty.",
};
