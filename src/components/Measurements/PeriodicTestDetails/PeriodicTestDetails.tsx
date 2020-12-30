import React, { useState } from "react";
import { IPeriodicPressureTests } from "../../../common/interfaces";
import { Portal, PortalTarget } from "../../../common/Portal/Portal";
import { EditDailyTest } from "../../Popups/EditDailyTest/EditDailyTest";
import { DailyTest } from "./DailyTest/DailyTest";
import {
  setOmittedDailyTest,
  updateNumberOfTotalAndDoneTestsAndState,
  calculateAverageResults,
} from "./../../../store/actions/profilesAction";
import { TimeOfDayStates } from "./../../../common/constants";
import {
  Wrapper,
  FieldsetStyled,
  ControlPanel,
  BackArrow,
} from "./PeriodicTestDetails.css";
import { PeriodicTestStates } from "./../../../common/constants";
import { Legend } from "./../../../styles/mixins/Fieldset";
import { useDispatch } from "react-redux";
import { SharedBasicButton } from "./../../Buttons/SharedBasicButton/SharedBasicButton";
import { AverageResults } from "../../Popups/AverageResults/AverageResults";

export const PeriodicTestDetails: React.FC<IProps> = ({
  test,
  userID,
  backToPeriodicTestsList,
}) => {
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  const [popup, setPopup] = useState<Object>({});
  const dispatch = useDispatch();
  const { list, id: periodicID, state, totalNumberOfTests } = test;
  const testIsDone =
    state === PeriodicTestStates.DONE && totalNumberOfTests !== 0
      ? true
      : false;

  const renderList = list.map((item) => (
    <DailyTest
      userID={userID}
      key={item.id}
      dailyTest={item}
      editDailyTest={(
        dailyID: number,
        timeOfDay: TimeOfDayStates,
        date: string
      ) => {
        setPopup(
          <EditDailyTest
            userID={userID}
            periodicID={periodicID}
            dailyID={dailyID}
            timeOfDay={timeOfDay}
            setIsOpenEditDailyTestPopup={setIsOpenPortal}
            date={date}
          />
        );
        setIsOpenPortal(true);
      }}
      setOmittedDaily={(
        dailyID: number,
        timeOfDay: TimeOfDayStates,
        omitted: boolean
      ) => {
        dispatch(
          setOmittedDailyTest(userID, periodicID, dailyID, timeOfDay, omitted)
        );
        dispatch(updateNumberOfTotalAndDoneTestsAndState(userID, periodicID));
      }}
    />
  ));

  return (
    <Wrapper>
      <FieldsetStyled>
        <Legend>
          Pomiar okresowy <span>#{periodicID}</span>
        </Legend>
        <ControlPanel>
          <BackArrow onClick={backToPeriodicTestsList}>
            <i className="fas fa-long-arrow-alt-left"></i>
          </BackArrow>
          <div className="buttons-wapper">
            <SharedBasicButton
              onClick={() => {
                dispatch(calculateAverageResults(userID, periodicID));
                setPopup(
                  <AverageResults
                    userID={userID}
                    periodicTest={test}
                    setIsOpenAverageResultsPopup={setIsOpenPortal}
                  />
                );
                setIsOpenPortal(true);
              }}
              isDisabled={!testIsDone}
            >
              Podsumowanie
            </SharedBasicButton>
          </div>
        </ControlPanel>
        <ul>{renderList}</ul>
      </FieldsetStyled>
      {isOpenPortal ? (
        <Portal target={PortalTarget.MODAL}>{popup}</Portal>
      ) : null}
    </Wrapper>
  );
};

interface IProps {
  test: IPeriodicPressureTests;
  userID: number;
  backToPeriodicTestsList: () => void;
}
