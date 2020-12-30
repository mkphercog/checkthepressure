import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { UserPressureBar } from "./components/UserPressureBar/UserPressureBar";
import { ProfilesSelector } from "./components/ProfilesSelector/ProfilesSelector";
import { Measurements } from "./components/Measurements/Measurements";
import { Advices } from "./components/Advices/Advices";
import { Info } from "./components/Info/Info";
import { anonymous } from "./common/constants";
import { IGlobalState } from "./common/interfaces";
import { AppBG, AppWrapper, AppBottomBar } from "./App.css";
import { GlobalStyles } from "./index.css";

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
        {selectedUser.id !== -1 ? (
          <UserPressureBar
            name={name}
            age={age}
            userBloodPressureBasedOnAge={userBloodPressureBasedOnAge}
          />
        ) : null}
        <Switch>
          <Route path="/" exact>
            <ProfilesSelector />
          </Route>
          <Route path="/measurements">
            <Measurements selectedUser={selectedUser} />
          </Route>
          <Route path="/advices">
            <Advices />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
      </AppWrapper>
    </AppBG>
  );
};
