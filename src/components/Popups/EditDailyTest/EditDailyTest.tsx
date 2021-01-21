import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  editDailyValues,
  updateNumberOfTotalAndDoneTestsAndState,
} from "store/actions/profilesAction";
import {
  TimeOfDayTypes,
  TEST_VALUES_INFO,
  TimeOfDayDisplayNames,
  MeasurementSymbols,
} from "common/constants";
import { Portal, PortalTarget } from "common/Portal/Portal";
import { IGlobalState } from "common/interfaces";
import {
  SharedButton,
  SharedButtonIcons,
  SharedButtonStyles,
  SharedButtonType,
} from "components/shared/SharedButton/SharedButton";
import { Information } from "components/Popups/Information/Information";
import { Warnings } from "components/Popups/Warnings/Warnings";

import {
  getDailyTimeOfDayTestValues,
  validateValues,
  ValidateStateTypes,
} from "./EditDailyTestFunctions";
import {
  PopupWrapper,
  PopupTitleGreen,
  PopupContentWrapper,
} from "styles/mixins/Popups";
import { FormStyled } from "./EditDailyTest.css";

interface IProps {
  userID: number;
  periodicID: number;
  dailyID: number;
  timeOfDay: TimeOfDayTypes;
  setIsOpenEditDailyTestPopup: React.Dispatch<React.SetStateAction<boolean>>;
  date: string;
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

  const handleShowInfo = (messageType: MeasurementSymbols) => {
    let messageToShow = "";

    switch (messageType) {
      case MeasurementSymbols.sys: {
        messageToShow = TEST_VALUES_INFO.SYS;
        break;
      }
      case MeasurementSymbols.dia: {
        messageToShow = TEST_VALUES_INFO.DIA;
        break;
      }
      case MeasurementSymbols.pulse: {
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
          timeOfDay === TimeOfDayTypes.morning
            ? TimeOfDayDisplayNames.morning
            : TimeOfDayDisplayNames.evening
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
            <SharedButton
              onClick={() => handleShowInfo(MeasurementSymbols.sys)}
              styles={SharedButtonStyles.info}
              icon={SharedButtonIcons.info}
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
            <SharedButton
              onClick={() => handleShowInfo(MeasurementSymbols.dia)}
              styles={SharedButtonStyles.info}
              icon={SharedButtonIcons.info}
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
            <SharedButton
              onClick={() => handleShowInfo(MeasurementSymbols.pulse)}
              styles={SharedButtonStyles.info}
              icon={SharedButtonIcons.info}
            />
          </div>
          <div className="apply-button">
            <SharedButton
              onClick={handleSubmit}
              type={SharedButtonType.submit}
              styles={SharedButtonStyles.apply}
              icon={SharedButtonIcons.apply}
            />
          </div>
        </FormStyled>
      </PopupContentWrapper>
      <SharedButton
        onClick={() => setIsOpenEditDailyTestPopup(false)}
        styles={SharedButtonStyles.exit}
        icon={SharedButtonIcons.exit}
      />
      {isOpenPortal ? (
        <Portal target={PortalTarget.MODAL}>{popup}</Portal>
      ) : null}
    </PopupWrapper>
  );
};
