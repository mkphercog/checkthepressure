import React from "react";
import { Switch, Route } from "react-router-dom";
import { ProfilesPage } from "./pages/Profiles/ProfilesPage";
import { GlobalStyles, AppStyled } from "./index.css";

export const App: React.FC = () => (
  <AppStyled>
    <Switch>
      <Route path="/" exact>
        <ProfilesPage />
      </Route>
      <Route path="/app" exact>
        <div>APP</div>
      </Route>
    </Switch>
    <GlobalStyles />
  </AppStyled>
);
