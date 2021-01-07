import React, { useState } from "react";
import {
  PopupWrapper,
  PopupContentWrapper,
  PopupTitleGreen,
} from "./../../../styles/mixins/Popups";
import { FormStyled } from "./AddUser.css";
import { useDispatch, useSelector } from "react-redux";
import { IGlobalState, IUser } from "./../../../common/interfaces";
import { Warnings } from "./../../Popups/Warnings/Warnings";
import { addProfile } from "./../../../store/actions/profilesAction";
import { findUserBloodPressureBasedOnAge } from "./../../../common/bloodPressureTable";
import { anonymous } from "./../../../common/constants";
import { Portal, PortalTarget } from "./../../../common/Portal/Portal";
import { SharedExitButton } from "../../Buttons/SharedExitButton/SharedExitButton";
import {
  SharedApplyButton,
  SharedApplyButtonType,
} from "../../Buttons/SharedApplyButton/SharedApplyButton";
import { NAME_MAX_CHARS, MAX_AGE } from "./../../../common/constants";

export const AddUser: React.FC<IProps> = ({ setIsOpenAddUserPopup }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();
  const profiles = useSelector((state: IGlobalState) => state.profiles);
  const { nextAvailableUserID } = profiles;
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  const [popup, setPopup] = useState(Object);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const parsedAge = parseInt(age);

    if (name === "" || age === "") {
      setPopup(
        <Warnings
          message="Uzupełnij wszystkie pola."
          setIsOpen={setIsOpenPortal}
        />
      );
      setIsOpenPortal(true);
    } else if (name.length >= NAME_MAX_CHARS) {
      setPopup(
        <Warnings
          message={`Podane imię jest za długie. (max ${NAME_MAX_CHARS} znaków)`}
          setIsOpen={setIsOpenPortal}
        />
      );
      setIsOpenPortal(true);
    } else if (parsedAge < 0) {
      setPopup(
        <Warnings
          message="Wiek nie może być wartością ujemną."
          setIsOpen={setIsOpenPortal}
        />
      );
      setIsOpenPortal(true);
    } else if (parsedAge > MAX_AGE) {
      setPopup(
        <Warnings
          message={`Wiek zbyt duży. (max ${MAX_AGE})`}
          setIsOpen={setIsOpenPortal}
        />
      );
      setIsOpenPortal(true);
    } else if (/\D/gi.test(age)) {
      setPopup(
        <Warnings
          message="Wiek posiada niepoprawną wartość."
          setIsOpen={setIsOpenPortal}
        />
      );
      setIsOpenPortal(true);
    } else {
      const getUserBloodPressure =
        findUserBloodPressureBasedOnAge(parsedAge) ||
        anonymous.userBloodPressureBasedOnAge;

      const newProfile: IUser = {
        id: nextAvailableUserID,
        name: name,
        age: parsedAge,
        userBloodPressureBasedOnAge: {
          MIN: getUserBloodPressure?.MIN,
          NORMAL: getUserBloodPressure?.NORMAL,
          MAX: getUserBloodPressure?.MAX,
        },
        nextAvailablePeriodicTestID: 1,
        periodicPressureTests: [],
      };
      setName("");
      setAge("");
      dispatch(addProfile(newProfile));
      setIsOpenAddUserPopup(false);
    }
  };

  return (
    <PopupWrapper>
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
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="apply-button">
            <SharedApplyButton
              type={SharedApplyButtonType.submit}
              submitFunction={handleSubmit}
            />
          </div>
        </FormStyled>
      </PopupContentWrapper>
      <SharedExitButton setIsOpen={setIsOpenAddUserPopup} />
      {isOpenPortal ? (
        <Portal target={PortalTarget.MODAL}>{popup}</Portal>
      ) : null}
    </PopupWrapper>
  );
};

interface IProps {
  setIsOpenAddUserPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
