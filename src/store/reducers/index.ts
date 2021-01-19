import { combineReducers } from "redux";
import { profilesReducer } from "store/reducers/profilesReducer";

export const rootReducer = combineReducers({
  profiles: profilesReducer,
});
