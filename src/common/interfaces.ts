import { TimeOfDayStates } from "./constants";

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
  list: IDailyTest[];
}

export interface IDailyTest {
  id: number;
  date: string;
  morning: {
    timeOfDay: TimeOfDayStates.MORNING;
    omitted: boolean;
    SYS: number;
    DIA: number;
    PULSE: number;
  };
  evening: {
    timeOfDay: TimeOfDayStates.EVENING;
    omitted: boolean;
    SYS: number;
    DIA: number;
    PULSE: number;
  };
}
