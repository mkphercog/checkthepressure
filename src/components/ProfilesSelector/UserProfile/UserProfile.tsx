import React from "react";
import { useHistory } from "react-router-dom";

import { SharedButton } from "components/shared/SharedButton/SharedButton";
import {
  SharedButtonStyles,
  SharedButtonIcons,
} from "components/shared/SharedButton/SharedButtonTypes";

import { Wrapper, UserData, Options } from "./UserProfile.css";

interface UserProfileProps {
  id: number;
  name: string;
  age: number;
  deleteProfile: (id: number, name: string) => void;
  selectUserID: (id: number) => void;
}

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
        <SharedButton
          onClick={() => {
            selectUserID(id);
            history.push("/measurements");
          }}
        >
          Otwórz profil
        </SharedButton>
        <SharedButton
          onClick={() => deleteProfile(id, name)}
          styles={SharedButtonStyles.delete}
          icon={SharedButtonIcons.delete}
        />
      </Options>
    </Wrapper>
  );
};
