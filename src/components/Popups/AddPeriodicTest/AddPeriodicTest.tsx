import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addPeriodicPressureTest } from "store/actions/profilesAction";
import { numRangeOptions } from "common/optionsForSelectTag";
import { PeriodicTestStates } from "common/constants";
import {
  SharedButton,
  SharedButtonStyles,
  SharedButtonIcons,
  SharedButtonType,
} from "components/shared/SharedButton/SharedButton";

import {
  generateDateArray,
  generateDailyTestList,
} from "./AddPeriodicTestFunctions";
import {
  PopupWrapper,
  PopupContentWrapper,
  PopupTitleGreen,
  PopupSelect,
} from "styles/mixins/Popups";
import { FormStyled } from "./AddPeriodicTest.css";

const today = new Date();

interface IProps {
  userID: number;
  nextAvailablePeriodicTestID: number;
  setIsOpenAddPeriodicTestPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddPeriodicTest: React.FC<IProps> = ({
  userID,
  nextAvailablePeriodicTestID,
  setIsOpenAddPeriodicTestPopup,
}) => {
  const [startDay, setStartDay] = useState(today.toISOString().slice(0, 10));
  const [days, setDays] = useState(4);
  const dispatch = useDispatch();
  const renderOptionsDays = numRangeOptions(1, 7);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const getDateArray = generateDateArray(startDay, days);
    const getDailyTestList = generateDailyTestList(getDateArray);
    const newPeriodicTest = {
      id: nextAvailablePeriodicTestID,
      start: getDateArray[0],
      end: getDateArray[getDateArray.length - 1],
      days: days,
      state: PeriodicTestStates.IN_PROGRESS,
      totalNumberOfTests: days * 2,
      numberOfTestsDone: 0,
      averageResults: {
        morning: {
          SYS: 0,
          DIA: 0,
          PULSE: 0,
        },
        evening: {
          SYS: 0,
          DIA: 0,
          PULSE: 0,
        },
        total: {
          SYS: 0,
          DIA: 0,
          PULSE: 0,
        },
      },
      list: getDailyTestList,
    };
    dispatch(addPeriodicPressureTest(userID, newPeriodicTest));
    setIsOpenAddPeriodicTestPopup(false);
  };

  return (
    <PopupWrapper>
      <PopupTitleGreen>
        <p>Nowy pomiar okresowy</p>
      </PopupTitleGreen>
      <PopupContentWrapper>
        <FormStyled>
          <div>
            <label htmlFor="dateStart">Start: </label>
            <input
              type="date"
              id="dateStart"
              value={startDay}
              onChange={(e) => setStartDay(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="days">Ilość dni: </label>
            <PopupSelect
              value={days}
              id="days"
              onChange={(e) => setDays(Number(e.target.value))}
            >
              {renderOptionsDays}
            </PopupSelect>
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
        onClick={() => setIsOpenAddPeriodicTestPopup(false)}
        styles={SharedButtonStyles.exit}
        icon={SharedButtonIcons.exit}
      />
    </PopupWrapper>
  );
};
