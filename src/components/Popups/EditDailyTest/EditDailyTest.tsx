import React, { useState } from "react";
import {
  PopupTitleGreen,
  PopupContentWrapper,
} from "./../../../styles/mixins/Popups";
import { Wrapper, FormStyled } from "./EditDailyTest.css";
import { useDispatch } from "react-redux";
import { Warnings } from "./../../Popups/Warnings/Warnings";
import {
  editDailyValues,
  updateNumberOfTotalAndDoneTestsAndState,
} from "./../../../store/actions/profilesAction";
import { TimeOfDayStates } from "./../../../common/constants";
import { Portal, PortalTarget } from "./../../../common/Portal/Portal";
import { SharedExitButton } from "../../Buttons/SharedExitButton/SharedExitButton";
import {
  SharedApplyButton,
  SharedApplyButtonType,
} from "../../Buttons/SharedApplyButton/SharedApplyButton";

export const EditDailyTest: React.FC<IProps> = ({
  userID,
  periodicID,
  dailyID,
  timeOfDay,
  setIsOpenEditDailyTestPopup,
  date,
}) => {
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  const [popup, setPopup] = useState(Object);
  const [sys, setSys] = useState("");
  const [dia, setDia] = useState("");
  const [pulse, setPulse] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (Number(sys) < 0 || Number(dia) < 0 || Number(pulse) < 0) {
      setPopup(
        <Warnings
          message="Conajmniej jedno pole zawiera ujemną wartość."
          setIsOpen={setIsOpenPortal}
        />
      );
      setIsOpenPortal(true);
    } else if (Number(sys) > 300 || Number(dia) > 300 || Number(pulse) > 300) {
      setPopup(
        <Warnings
          message="Conajmniej jedno pole zawiera zbyt dużą wartość."
          setIsOpen={setIsOpenPortal}
        />
      );
      setIsOpenPortal(true);
    } else if (
      /\D/gi.test(sys) ||
      /\D/gi.test(dia) ||
      /\D/gi.test(pulse) ||
      sys === "" ||
      dia === "" ||
      pulse === ""
    ) {
      setPopup(
        <Warnings
          message="Conajmniej jedno pole ma nieprawidłową wartość."
          setIsOpen={setIsOpenPortal}
        />
      );
      setIsOpenPortal(true);
    } else {
      dispatch(
        editDailyValues(
          userID,
          periodicID,
          dailyID,
          timeOfDay,
          Number(sys),
          Number(dia),
          Number(pulse)
        )
      );
      dispatch(updateNumberOfTotalAndDoneTestsAndState(userID, periodicID));
      setIsOpenEditDailyTestPopup(false);
    }
  };

  return (
    <Wrapper>
      <PopupTitleGreen>
        <p>{`${
          timeOfDay === TimeOfDayStates.MORNING
            ? TimeOfDayStates.MORNING
            : TimeOfDayStates.EVENING
        } ${date}`}</p>
      </PopupTitleGreen>
      <PopupContentWrapper>
        <FormStyled>
          <div>
            <label htmlFor="sys">SYS: </label>
            <input
              type="number"
              id="sys"
              value={sys}
              onChange={(e) => setSys(e.target.value)}
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="dia">DIA: </label>
            <input
              type="number"
              id="dia"
              value={dia}
              onChange={(e) => setDia(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="pulse">PULS: </label>
            <input
              type="number"
              id="pulse"
              value={pulse}
              onChange={(e) => setPulse(e.target.value)}
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
      <SharedExitButton setIsOpen={setIsOpenEditDailyTestPopup} />
      {isOpenPortal ? (
        <Portal target={PortalTarget.MODAL}>{popup}</Portal>
      ) : null}
    </Wrapper>
  );
};

interface IProps {
  userID: number;
  periodicID: number;
  dailyID: number;
  timeOfDay: TimeOfDayStates;
  setIsOpenEditDailyTestPopup: React.Dispatch<React.SetStateAction<boolean>>;
  date: string;
}
