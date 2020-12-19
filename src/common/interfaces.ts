import { TimeOfDayStates } from "./constants";

export interface IGlobalState {
  profiles: {
    nextAvailableUserID: number;
    users: IUserInterface[];
    selectedUserID: number;
  };
}

export interface IUserInterface {
  id: number;
  name: string;
  age: number;
  nextAvailablePeriodicTestID: number;
  periodicPressureTests: IPeriodicPressureTests[];
}

export interface IPeriodicPressureTests {
  id: number;
  start: string;
  end: string;
  days: number;
  state: string;
  list: IDailyTest[];
}

export interface IDailyTest {
  id: number;
  date: string;
  morning: {
    timeOfDay: TimeOfDayStates.MORNING;
    SYS: number;
    DIA: number;
    PULSE: number;
  };
  evening: {
    timeOfDay: TimeOfDayStates.EVENING;
    SYS: number;
    DIA: number;
    PULSE: number;
  };
}
