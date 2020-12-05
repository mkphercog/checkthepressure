import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserProfile } from "./UserProfile/UserProfile";
import { numRangeOptions } from "./../../common/optionsForSelectTag";
import { addProfile, deleteProfile } from "../../store/actions/profilesAction";
import { GlobalState, UserInterface } from "./../../common/interfaces";
import { Wrapper, ProfilesSelectorStyled } from "./ProfilesSelector.css";

export const ProfilesSelector: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);
  const dispatch = useDispatch();
  const profiles = useSelector((state: GlobalState) => state.profiles);
  const { nextAvailableID, users } = profiles;
  const renderOptionsAge = numRangeOptions(1, 120);

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
      alert("Podaj imię.");
    } else if (name.length >= 20) {
      alert("Podane imię jest za długie. ( max 20 znaków )");
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
    </Wrapper>
  );
};
