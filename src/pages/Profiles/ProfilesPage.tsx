import React from "react";
import { ProfilesLogo } from "../../components/ProfilesLogo/ProfilesLogo";
import { ProfilesSelector } from "../../components/ProfilesSelector/ProfilesSelector";
import { Wrapper } from "./ProfilesPage.css";

export const ProfilesPage: React.FC = () => (
  <Wrapper>
    <ProfilesLogo />
    <ProfilesSelector />
  </Wrapper>
);
