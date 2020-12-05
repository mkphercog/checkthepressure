export interface GlobalState {
  profiles: {
    nextAvailableID: number;
    users: UserInterface[];
  };
}

export interface UserInterface {
  id: number;
  name: string;
  age: number;
  // periodicPressureTests: {}[];
}
