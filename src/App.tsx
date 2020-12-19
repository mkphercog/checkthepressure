import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { UserPressureBar } from "./components/UserPressureBar/UserPressureBar";
import { ProfilesSelector } from "./components/ProfilesSelector/ProfilesSelector";
import { Measurements } from "./components/Measurements/Measurements";
import { IGlobalState } from "./common/interfaces";
import { GlobalStyles, AppBG, AppWrapper, AppBottomBar } from "./index.css";
import { useSelector } from "react-redux";
import { anonymous } from "./common/constants";

export const App: React.FC = () => {
  const getProfiles = useSelector((state: IGlobalState) => state.profiles);
  const { users, selectedUserID } = getProfiles;
  const selectedUser =
    users.find((user) => selectedUserID === user.id) || anonymous;
  const { name, age, userBloodPressureBasedOnAge } = selectedUser;

  return (
    <AppBG>
      <AppBottomBar />
      <GlobalStyles />
      <AppWrapper>
        <Navigation />
        <UserPressureBar
          name={name}
          age={age}
          userBloodPressureBasedOnAge={userBloodPressureBasedOnAge}
        />
        <Switch>
          <Route path="/" exact>
            <ProfilesSelector />
          </Route>
          <Route path="/measurements">
            <Measurements selectedUser={selectedUser} />
          </Route>
        </Switch>
      </AppWrapper>
    </AppBG>
  );
};
