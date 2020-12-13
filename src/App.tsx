import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { UserPressureBar } from "./components/UserPressureBar/UserPressureBar";
import { ProfilesSelector } from "./components/ProfilesSelector/ProfilesSelector";
import { Measurements } from "./components/Measurements/Measurements";
import { GlobalState } from "./common/interfaces";
import { GlobalStyles, AppBG, AppWrapper, AppBottomBar } from "./index.css";
import { useSelector } from "react-redux";

export const App: React.FC = () => {
  const getProfiles = useSelector((state: GlobalState) => state.profiles);
  const { users, selectedUserID } = getProfiles;
  const selectedUser = users.find((user) => selectedUserID === user.id);
  const { name, age } = selectedUser || { name: "Nieznajomy", age: 0 };

  return (
    <AppBG>
      <AppBottomBar />
      <GlobalStyles />
      <AppWrapper>
        <Navigation />
        <UserPressureBar name={name} age={age} />
        <Switch>
          <Route path="/" exact>
            <ProfilesSelector />
          </Route>
          <Route path="/measurements">
            <Measurements />
          </Route>
        </Switch>
      </AppWrapper>
    </AppBG>
  );
};
