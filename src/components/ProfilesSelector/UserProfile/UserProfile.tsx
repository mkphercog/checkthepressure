import React from "react";
import { NavLink } from "react-router-dom";
import { UserInterface } from "./../../../common/interfaces";

export const UserProfile: React.FC<UserProfileProps> = ({
  id,
  name,
  age,
  deleteProfile,
}) => (
  <div>
    <p>
      {name} {age}
    </p>
    <NavLink to="/app" exact>
      Otwórz profil
    </NavLink>
    <i className="fas fa-user-minus" onClick={() => deleteProfile(id)}></i>
  </div>
);

interface UserProfileProps extends UserInterface {
  deleteProfile: Function;
}
