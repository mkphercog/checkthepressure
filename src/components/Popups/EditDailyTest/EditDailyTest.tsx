import React, { useState } from "react";
import {
  PopupWrapper,
  PopupTitleGreen,
  PopupContentWrapper,
} from "./../../../styles/mixins/Popups";
import { FormStyled } from "./EditDailyTest.css";
import { useDispatch, useSelector } from "react-redux";
import { Warnings } from "./../../Popups/Warnings/Warnings";
import {
  editDailyValues,
  updateNumberOfTotalAndDoneTestsAndState,
} from "./../../../store/actions/profilesAction";
import { TimeOfDayStates, TEST_VALUES_INFO } from "./../../../common/constants";
import { Portal, PortalTarget } from "./../../../common/Portal/Portal";
import { SharedExitButton } from "../../Buttons/SharedExitButton/SharedExitButton";
import {
  SharedApplyButton,
  SharedApplyButtonType,
} from "../../Buttons/SharedApplyButton/SharedApplyButton";
import { IGlobalState } from "../../../common/interfaces";
import {
  getDailyTimeOfDayTestValues,
  validateValues,
  ValidateStateTypes,
} from "./EditDailyTestFunctions";
import { SharedInfoButton } from "../../Buttons/SharedInfoButton/SharedInfoButton";
import { Information } from "../Information/Information";

enum SysDiaPulse {
  SYS = "SYS",
  DIA = "DIA",
  PULSE = "PULSE",
}

export const EditDailyTest: React.FC<IProps> = ({
  userID,
  periodicID,
  dailyID,
  timeOfDay,
  setIsOpenEditDailyTestPopup,
  date,
}) => {
  const users = useSelector((state: IGlobalState) => state.profiles.users);
  const currentTestValuesToRender = getDailyTimeOfDayTestValues(
    users,
    userID,
    periodicID,
    dailyID,
    timeOfDay
  );
  const { currentSys, currentDia, currentPulse } = currentTestValuesToRender;
  const [sys, setSys] = useState(currentSys);
  const [dia, setDia] = useState(currentDia);
  const [pulse, setPulse] = useState(currentPulse);
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  const [popup, setPopup] = useState(Object);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const checkValues = validateValues(sys, dia, pulse);
    if (checkValues.state === ValidateStateTypes.notEnough) {
      setPopup(
        <Warnings message={checkValues.message} setIsOpen={setIsOpenPortal} />
      );
      setIsOpenPortal(true);
    } else if (checkValues.state === ValidateStateTypes.tooMuch) {
      setPopup(
        <Warnings message={checkValues.message} setIsOpen={setIsOpenPortal} />
      );
      setIsOpenPortal(true);
    } else if (checkValues.state === ValidateStateTypes.badSign) {
      setPopup(
        <Warnings message={checkValues.message} setIsOpen={setIsOpenPortal} />
      );
      setIsOpenPortal(true);
    } else if (checkValues.state === ValidateStateTypes.correct) {
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

  const handleShowInfo = (messageType: SysDiaPulse) => {
    let messageToShow = "";

    switch (messageType) {
      case SysDiaPulse.SYS: {
        messageToShow = TEST_VALUES_INFO.SYS;
        break;
      }
      case SysDiaPulse.DIA: {
        messageToShow = TEST_VALUES_INFO.DIA;
        break;
      }
      case SysDiaPulse.PULSE: {
        messageToShow = TEST_VALUES_INFO.PULSE;
        break;
      }
    }
    setPopup(
      <Information message={messageToShow} setIsOpen={setIsOpenPortal} />
    );
    setIsOpenPortal(true);
  };

  return (
    <PopupWrapper>
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
            <SharedInfoButton onClick={() => handleShowInfo(SysDiaPulse.SYS)} />
          </div>
          <div>
            <label htmlFor="dia">DIA: </label>
            <input
              type="number"
              id="dia"
              value={dia}
              onChange={(e) => setDia(e.target.value)}
            />
            <SharedInfoButton onClick={() => handleShowInfo(SysDiaPulse.DIA)} />
          </div>
          <div>
            <label htmlFor="pulse">PULS: </label>
            <input
              type="number"
              id="pulse"
              value={pulse}
              onChange={(e) => setPulse(e.target.value)}
            />
            <SharedInfoButton
              onClick={() => handleShowInfo(SysDiaPulse.PULSE)}
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
    </PopupWrapper>
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
