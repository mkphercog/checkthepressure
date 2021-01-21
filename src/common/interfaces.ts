import { TimeOfDayTypes } from "common/constants";

export interface IGlobalState {
  profiles: {
    nextAvailableUserID: number;
    users: IUser[];
    selectedUserID: number;
  };
}

export interface IUser {
  id: number;
  name: string;
  age: number;
  userBloodPressureBasedOnAge: IBloodPressureBasedOnAge;
  nextAvailablePeriodicTestID: number;
  periodicPressureTests: IPeriodicPressureTests[];
}

export interface IBloodPressureBasedOnAge {
  MIN: {
    SYS: number;
    DIA: number;
  };
  NORMAL: {
    SYS: number;
    DIA: number;
  };
  MAX: {
    SYS: number;
    DIA: number;
  };
}

export interface IPeriodicPressureTests {
  id: number;
  start: string;
  end: string;
  days: number;
  state: string;
  totalNumberOfTests: number;
  numberOfTestsDone: number;
  averageResults: {
    morning: {
      SYS: number;
      DIA: number;
      PULSE: number;
    };
    evening: {
      SYS: number;
      DIA: number;
      PULSE: number;
    };
    total: {
      SYS: number;
      DIA: number;
      PULSE: number;
    };
  };
  list: IDailyTest[];
}

export interface IDailyTest {
  id: number;
  date: string;
  morning: {
    timeOfDay: TimeOfDayTypes.morning;
    omitted: boolean;
    SYS: number;
    DIA: number;
    PULSE: number;
  };
  evening: {
    timeOfDay: TimeOfDayTypes.evening;
    omitted: boolean;
    SYS: number;
    DIA: number;
    PULSE: number;
  };
}
