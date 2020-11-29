import React from "react";
import { GlobalStyles, AppStyled } from "./index.css";
import { Profiles } from "./pages/Profiles/Profiles";

export const App = () => (
  <AppStyled>
    <Profiles />
    <GlobalStyles />
  </AppStyled>
);
