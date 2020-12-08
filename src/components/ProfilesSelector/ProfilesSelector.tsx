import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserProfile } from "./UserProfile/UserProfile";
import { numRangeOptions } from "./../../common/optionsForSelectTag";
import { addProfile, deleteProfile } from "../../store/actions/profilesAction";
import { GlobalState, UserInterface } from "./../../common/interfaces";
import { Wrapper, ProfilesSelectorStyled } from "./ProfilesSelector.css";
import { Portal, PortalTarget } from "../../common/Portal/Portal";
import { Warnings } from "../Popups/Warnings/Warnings";

export const ProfilesSelector: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);
  const dispatch = useDispatch();
  const profiles = useSelector((state: GlobalState) => state.profiles);
  const { nextAvailableID, users } = profiles;
  const renderOptionsAge = numRangeOptions(1, 120);
  const [portalOpen, setPortalOpen] = useState(false);
  const [message, setMessage] = useState(Object);

  const renderUsers = users.map(({ name, age, id }) => (
    <UserProfile
      key={id}
      id={id}
      name={name}
      age={age}
      deleteProfile={() => dispatch(deleteProfile(id))}
    />
  ));

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (name === "") {
      setMessage(
        <Warnings message="Puste pole, podaj imię :)" close={setPortalOpen} />
      );
      setPortalOpen(true);
    } else if (name.length >= 20) {
      setMessage(
        <Warnings
          message="Podane imię jest za długie. (max 20 znaków)"
          close={setPortalOpen}
        />
      );
      setPortalOpen(true);
    } else {
      const newProfile: UserInterface = {
        id: nextAvailableID,
        name: name,
        age: age,
      };
      setName("");
      setAge(1);
      dispatch(addProfile(newProfile));
    }
  };

  return (
    <Wrapper>
      <ProfilesSelectorStyled>
        {renderUsers}
        <form>
          <label>
            Imię:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Wiek:{" "}
            <select
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value))}
              name="age"
            >
              {renderOptionsAge}
            </select>
          </label>
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Dodaj profil
          </button>
        </form>
      </ProfilesSelectorStyled>
      {portalOpen ? (
        <Portal target={PortalTarget.MODAL}>{message}</Portal>
      ) : null}
    </Wrapper>
  );
};
