import { combineReducers } from "redux";
import { profilesReducer } from "./../reducers/profilesReducer";

export const rootReducer = combineReducers({
  profiles: profilesReducer,
});
