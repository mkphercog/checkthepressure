import React, { useState } from "react";
import { IPeriodicPressureTests } from "../../../common/interfaces";
import { Portal, PortalTarget } from "../../../common/Portal/Portal";
import { EditDailyTest } from "../../Popups/EditDailyTest/EditDailyTest";
import { DailyTest } from "./DailyTest/DailyTest";
import {
  setOmittedDailyTest,
  updateNumberOfTotalAndDoneTestsAndState,
} from "./../../../store/actions/profilesAction";
import { TimeOfDayStates } from "./../../../common/constants";
import {
  Wrapper,
  FieldsetStyled,
  ControlPanel,
  BackArrow,
  SummaryBtn,
  PdfBtn,
} from "./PeriodicTestDetails.css";
import { PeriodicTestStates } from "./../../../common/constants";
import { Legend } from "./../../../styles/mixins/Fieldset";
import { useDispatch } from "react-redux";

export const PeriodicTestDetails: React.FC<Props> = ({
  test,
  userID,
  backToList,
}) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [popup, setPopup] = useState<Object>({});
  const dispatch = useDispatch();
  const { list, id: preidoicID, state, totalNumberOfTests } = test;
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
            preidoicID={preidoicID}
            dailyID={dailyID}
            timeOfDay={timeOfDay}
            close={setIsPortalOpen}
            date={date}
          />
        );
        setIsPortalOpen(true);
      }}
      setOmittedDaily={(
        dailyID: number,
        timeOfDay: TimeOfDayStates,
        omitted: boolean
      ) => {
        dispatch(
          setOmittedDailyTest(userID, preidoicID, dailyID, timeOfDay, omitted)
        );
        dispatch(updateNumberOfTotalAndDoneTestsAndState(userID, preidoicID));
      }}
    />
  ));

  return (
    <Wrapper>
      <FieldsetStyled>
        <Legend>
          Pomiar okresowy <span>#{preidoicID}</span>
        </Legend>
        <ControlPanel>
          <BackArrow onClick={() => backToList()}>
            <i className="fas fa-long-arrow-alt-left"></i>
          </BackArrow>
          <SummaryBtn disabled={!testIsDone}>Podsumowanie</SummaryBtn>
          <PdfBtn disabled={!testIsDone}>
            <i className="fas fa-file-pdf"></i> Generuj pdf
          </PdfBtn>
        </ControlPanel>
        <ul>{renderList}</ul>
      </FieldsetStyled>
      {isPortalOpen ? (
        <Portal target={PortalTarget.MODAL}>{popup}</Portal>
      ) : null}
    </Wrapper>
  );
};

interface Props {
  test: IPeriodicPressureTests;
  userID: number;
  backToList: Function;
}
