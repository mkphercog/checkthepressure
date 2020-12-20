import React, { useState } from "react";
import { ExitIcon } from "./../../../styles/mixins";
import {
  AddUserWrapper,
  AddUserTitle,
  AddUserContent,
  AddUserBtn,
} from "./AddUser.css";
import { numRangeOptions } from "./../../../common/optionsForSelectTag";
import { useDispatch, useSelector } from "react-redux";
import { IGlobalState, IUserInterface } from "./../../../common/interfaces";
import { Warnings } from "./../../Popups/Warnings/Warnings";
import { addProfile } from "./../../../store/actions/profilesAction";
import { findUserBloodPressureBasedOnAge } from "./../../../common/bloodPressureTable";
import { anonymous } from "./../../../common/constants";
import { Portal, PortalTarget } from "./../../../common/Portal/Portal";

export const AddUser: React.FC<AddUserProps> = ({ closeAddUserPopup }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);
  const dispatch = useDispatch();
  const profiles = useSelector((state: IGlobalState) => state.profiles);
  const { nextAvailableUserID } = profiles;
  const [portalOpen, setPortalOpen] = useState(false);
  const [popup, setPopup] = useState(Object);
  const renderOptionsAge = numRangeOptions(1, 120);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (name === "") {
      setPopup(
        <Warnings message="Puste pole, podaj imię :)" close={setPortalOpen} />
      );
      setPortalOpen(true);
    } else if (name.length >= 15) {
      setPopup(
        <Warnings
          message="Podane imię jest za długie. (max 15 znaków)"
          close={setPortalOpen}
        />
      );
      setPortalOpen(true);
    } else {
      const getUserBloodPressure =
        findUserBloodPressureBasedOnAge(age) ||
        anonymous.userBloodPressureBasedOnAge;

      const newProfile: IUserInterface = {
        id: nextAvailableUserID,
        name: name,
        age: age,
        userBloodPressureBasedOnAge: {
          MIN: getUserBloodPressure?.MIN,
          NORMAL: getUserBloodPressure?.NORMAL,
          MAX: getUserBloodPressure?.MAX,
        },
        nextAvailablePeriodicTestID: 1,
        periodicPressureTests: [],
      };
      setName("");
      setAge(1);
      dispatch(addProfile(newProfile));
      closeAddUserPopup(false);
    }
  };

  return (
    <AddUserWrapper>
      <AddUserTitle>
        <p>Nowy profil</p>
      </AddUserTitle>
      <AddUserContent>
        <form>
          <div>
            <label htmlFor="name">Imię: </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="age">Wiek: </label>
            <select
              value={age}
              id="age"
              onChange={(e) => setAge(parseInt(e.target.value))}
              name="age"
            >
              {renderOptionsAge}
            </select>
          </div>
          <AddUserBtn type="submit" onClick={(e) => handleSubmit(e)}>
            <i className="fas fa-plus"></i>
          </AddUserBtn>
        </form>
      </AddUserContent>
      <ExitIcon
        className="fas fa-times"
        onClick={() => closeAddUserPopup(false)}
      ></ExitIcon>
      {portalOpen ? <Portal target={PortalTarget.MODAL}>{popup}</Portal> : null}
    </AddUserWrapper>
  );
};

interface AddUserProps {
  closeAddUserPopup: Function;
}
