import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPeriodicPressureTest } from "./../../../store/actions/profilesAction";
import { numRangeOptions } from "./../../../common/optionsForSelectTag";
import {
  generateDateArray,
  generateDailyTestList,
} from "./AddPeriodicTestFunctions";
import { PeriodicTestStates } from "./../../../common/constants";
import { ExitIcon } from "./../../../styles/mixins/Buttons";
import {
  PopupContentWrapper,
  PopupTitleGreen,
  PopupSelect,
} from "./../../../styles/mixins/Popups";
import { Wrapper, FormStyled, AddTestBtn } from "./AddPeriodicTest.css";

const today = new Date();

export const AddPeriodicTest: React.FC<AddUserProps> = ({
  userID,
  nextAvailablePeriodicTestID,
  closePopup,
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
      list: getDailyTestList,
    };
    dispatch(addPeriodicPressureTest(userID, newPeriodicTest));
    closePopup(false);
  };

  return (
    <Wrapper>
      <PopupTitleGreen>
        <p>Nowy pomiar okresowy</p>
      </PopupTitleGreen>
      <PopupContentWrapper>
        <FormStyled>
          <div>
            <label htmlFor="dateStart">Dzień rozpoczęcia: </label>
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
          <AddTestBtn type="submit" onClick={(e) => handleSubmit(e)}>
            <i className="fas fa-plus"></i>
          </AddTestBtn>
        </FormStyled>
      </PopupContentWrapper>
      <ExitIcon
        className="fas fa-times"
        onClick={() => closePopup(false)}
      ></ExitIcon>
    </Wrapper>
  );
};

interface AddUserProps {
  userID: number;
  nextAvailablePeriodicTestID: number;
  closePopup: Function;
}
