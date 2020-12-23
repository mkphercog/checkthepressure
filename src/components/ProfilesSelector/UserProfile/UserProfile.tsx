import React from "react";
import { useHistory } from "react-router-dom";
import { SharedBasicButton } from "../../Buttons/SharedBasicButton/SharedBasicButton";
import { SharedDeleteButton } from "../../Buttons/SharedDeleteButton/SharedDeleteButton";
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
        <SharedBasicButton
          onClick={() => {
            selectUserID(id);
            history.push("/measurements");
          }}
        >
          Otwórz profil
        </SharedBasicButton>
        <SharedDeleteButton deleteFunction={() => deleteProfile(id, name)} />
      </Options>
    </Wrapper>
  );
};

interface UserProfileProps {
  id: number;
  name: string;
  age: number;
  deleteProfile: (id: number, name: string) => void;
  selectUserID: (id: number) => void;
}
