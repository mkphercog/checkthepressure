import React, { useState } from "react";
import {
  PopupContentWrapper,
  PopupTitleGreen,
  PopupSelect,
} from "./../../../styles/mixins/Popups";
import { Wrapper, FormStyled, AddUserBtn } from "./AddUser.css";
import { numRangeOptions } from "./../../../common/optionsForSelectTag";
import { useDispatch, useSelector } from "react-redux";
import { IGlobalState, IUser } from "./../../../common/interfaces";
import { Warnings } from "./../../Popups/Warnings/Warnings";
import { addProfile } from "./../../../store/actions/profilesAction";
import { findUserBloodPressureBasedOnAge } from "./../../../common/bloodPressureTable";
import { anonymous } from "./../../../common/constants";
import { Portal, PortalTarget } from "./../../../common/Portal/Portal";
import { SharedExitButton } from "../../SharedExitButton/SharedExitButton";

export const AddUser: React.FC<IProps> = ({ setIsOpenAddUserPopup }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);
  const dispatch = useDispatch();
  const profiles = useSelector((state: IGlobalState) => state.profiles);
  const { nextAvailableUserID } = profiles;
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  const [popup, setPopup] = useState(Object);
  const renderOptionsAge = numRangeOptions(1, 120);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (name === "") {
      setPopup(
        <Warnings
          message="Puste pole, podaj imię :)"
          setIsOpen={setIsOpenPortal}
        />
      );
      setIsOpenPortal(true);
    } else if (name.length >= 15) {
      setPopup(
        <Warnings
          message="Podane imię jest za długie. (max 15 znaków)"
          setIsOpen={setIsOpenPortal}
        />
      );
      setIsOpenPortal(true);
    } else {
      const getUserBloodPressure =
        findUserBloodPressureBasedOnAge(age) ||
        anonymous.userBloodPressureBasedOnAge;

      const newProfile: IUser = {
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
      setIsOpenAddUserPopup(false);
    }
  };

  return (
    <Wrapper>
      <PopupTitleGreen>
        <p>Nowy profil</p>
      </PopupTitleGreen>
      <PopupContentWrapper>
        <FormStyled>
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
            <PopupSelect
              value={age}
              id="age"
              onChange={(e) => setAge(parseInt(e.target.value))}
              name="age"
            >
              {renderOptionsAge}
            </PopupSelect>
          </div>
          <AddUserBtn type="submit" onClick={(e) => handleSubmit(e)}>
            <i className="fas fa-plus"></i>
          </AddUserBtn>
        </FormStyled>
      </PopupContentWrapper>
      <SharedExitButton setIsOpen={setIsOpenAddUserPopup} />
      {isOpenPortal ? (
        <Portal target={PortalTarget.MODAL}>{popup}</Portal>
      ) : null}
    </Wrapper>
  );
};

interface IProps {
  setIsOpenAddUserPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
