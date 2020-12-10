import React from "react";
import { NavLink } from "react-router-dom";
import { UserInterface } from "./../../../common/interfaces";
import { UserProfileWrapper, UserData, Options } from "./UserProfile.css";

export const UserProfile: React.FC<UserProfileProps> = ({
  id,
  name,
  age,
  deleteProfile,
}) => (
  <UserProfileWrapper>
    <UserData>
      <p>{name}</p>
      <p>{age} lat</p>
    </UserData>
    <Options>
      <NavLink to="/measurements">Otwórz profil</NavLink>
      <i className="fas fa-user-minus" onClick={() => deleteProfile(id)}></i>
    </Options>
  </UserProfileWrapper>
);

interface UserProfileProps extends UserInterface {
  deleteProfile: Function;
}
