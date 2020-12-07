import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { ProfilesSelector } from "./components/ProfilesSelector/ProfilesSelector";
import { GlobalStyles, AppBG, AppWrapper, AppBottomBar } from "./index.css";

export const App: React.FC = () => (
  <AppBG>
    <AppBottomBar />
    <GlobalStyles />
    <AppWrapper>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <ProfilesSelector />
        </Route>
        <Route path="/app" exact></Route>
      </Switch>
    </AppWrapper>
  </AppBG>
);
