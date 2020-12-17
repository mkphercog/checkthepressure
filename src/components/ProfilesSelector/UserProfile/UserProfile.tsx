import React from "react";
import { NavLink } from "react-router-dom";
import { IUserInterface } from "./../../../common/interfaces";
import { UserProfileWrapper, UserData, Options } from "./UserProfile.css";

export const UserProfile: React.FC<UserProfileProps> = ({
  id,
  name,
  age,
  deleteProfile,
  selectUserID,
}) => (
  <UserProfileWrapper>
    <UserData>
      <p>{name}</p>
      <p>wiek: {age}</p>
    </UserData>
    <Options>
      <NavLink to="/measurements" onClick={() => selectUserID(id)}>
        Otwórz profil
      </NavLink>
      <i className="fas fa-user-minus" onClick={() => deleteProfile(id)}></i>
    </Options>
  </UserProfileWrapper>
);

interface UserProfileProps extends IUserInterface {
  deleteProfile: Function;
  selectUserID: Function;
}
