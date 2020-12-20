import React, { useState } from "react";
import { ExitIcon } from "./../../../styles/mixins/Buttons";
import {
  PopupTitleGreen,
  PopupContentWrapper,
} from "./../../../styles/mixins/Popups";
import { Wrapper, FormStyled, EditTestBtn } from "./EditDailyTest.css";
import { useDispatch } from "react-redux";
import { Warnings } from "./../../Popups/Warnings/Warnings";
import { editDailyValues } from "./../../../store/actions/profilesAction";
import { TimeOfDayStates } from "./../../../common/constants";
import { Portal, PortalTarget } from "./../../../common/Portal/Portal";

export const EditDailyTest: React.FC<AddUserProps> = ({
  userID,
  preidoicID,
  dailyID,
  timeOfDay,
  close,
  date,
}) => {
  const [portalOpen, setPortalOpen] = useState(false);
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
          close={setPortalOpen}
        />
      );
      setPortalOpen(true);
    } else if (Number(sys) > 300 || Number(dia) > 300 || Number(pulse) > 300) {
      setPopup(
        <Warnings
          message="Conajmniej jedno pole zawiera zbyt dużą wartość."
          close={setPortalOpen}
        />
      );
      setPortalOpen(true);
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
          close={setPortalOpen}
        />
      );
      setPortalOpen(true);
    } else {
      dispatch(
        editDailyValues(
          userID,
          preidoicID,
          dailyID,
          timeOfDay,
          Number(sys),
          Number(dia),
          Number(pulse)
        )
      );
      close(false);
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
          <EditTestBtn type="submit" onClick={(e) => handleSubmit(e)}>
            <i className="fas fa-plus"></i>
          </EditTestBtn>
        </FormStyled>
      </PopupContentWrapper>
      <ExitIcon
        className="fas fa-times"
        onClick={() => close(false)}
      ></ExitIcon>
      {portalOpen ? <Portal target={PortalTarget.MODAL}>{popup}</Portal> : null}
    </Wrapper>
  );
};

interface AddUserProps {
  userID: number;
  preidoicID: number;
  dailyID: number;
  timeOfDay: TimeOfDayStates;
  close: Function;
  date: string;
}
