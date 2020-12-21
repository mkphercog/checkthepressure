import React from "react";
import { useHistory } from "react-router-dom";
import { IUser } from "./../../../common/interfaces";
import { GrayButton } from "./../../../styles/mixins/Buttons";
import { Wrapper, UserData, Options } from "./UserProfile.css";

export const UserProfile: React.FC<UserProfileProps> = ({
  id,
  name,
  age,
  deleteProfile,
  selectUserID,
}) => {
  const history = useHistory();
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

interface UserProfileProps extends IUser {
  deleteProfile: Function;
  selectUserID: Function;
}
