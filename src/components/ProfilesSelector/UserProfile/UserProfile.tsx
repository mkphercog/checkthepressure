import React from "react";
import { useHistory } from "react-router-dom";
import { IUserInterface } from "./../../../common/interfaces";
import { GrayButton } from "./../../../styles/mixins/Buttons";
import { UserProfileWrapper, UserData, Options } from "./UserProfile.css";

export const UserProfile: React.FC<UserProfileProps> = ({
  id,
  name,
  age,
  deleteProfile,
  selectUserID,
}) => {
  const history = useHistory();
  return (
    <UserProfileWrapper>
      <UserData>
        <p>{name}</p>
        <p>wiek: {age}</p>
      </UserData>
      <Options>
        <GrayButton
          onClick={() => {
            selectUserID(id);
            history.push("/measurements");
          }}
        >
          Otwórz profil
        </GrayButton>
        <i className="fas fa-user-minus" onClick={() => deleteProfile(id)}></i>
      </Options>
    </UserProfileWrapper>
  );
};

interface UserProfileProps extends IUserInterface {
  deleteProfile: Function;
  selectUserID: Function;
}
