export interface GlobalState {
  profiles: {
    nextAvailableID: number;
    users: UserInterface[];
    selectedUserID: number;
  };
}

export interface UserInterface {
  id: number;
  name: string;
  age: number;
  // periodicPressureTests: {}[];
}
