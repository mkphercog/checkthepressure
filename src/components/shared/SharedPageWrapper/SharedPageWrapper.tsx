import React from "react";

import BackGround from "images/BG.jpg";
import { PageWrapperStyled } from "./SharedPageWrapper.css";

export const SharedPageWrapper: React.FC = ({ children }) => (
  <PageWrapperStyled>
    <img src={BackGround} alt="Sphygmomanometer" />
    {children}
  </PageWrapperStyled>
);
