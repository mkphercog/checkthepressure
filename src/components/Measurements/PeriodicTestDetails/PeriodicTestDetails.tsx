import React, { useState } from "react";
import { IPeriodicPressureTests } from "../../../common/interfaces";
import { Portal, PortalTarget } from "../../../common/Portal/Portal";
import { EditDailyTest } from "../../Popups/EditDailyTest/EditDailyTest";
import { DailyTest } from "./DailyTest/DailyTest";
import { setOmittedDailyTest } from "./../../../store/actions/profilesAction";
import { TimeOfDayStates } from "./../../../common/constants";
import {
  Wrapper,
  FieldsetStyled,
  ControlPanel,
  BackArrow,
  SummaryBtn,
  PdfBtn,
} from "./PeriodicTestDetails.css";
import { Legend } from "./../../../styles/mixins/Fieldset";
import { useDispatch } from "react-redux";

export const PeriodicTestDetails: React.FC<Props> = ({
  test,
  userID,
  backToList,
}) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [popup, setPopup] = useState<Object>({});
  const dispach = useDispatch();
  const { list, id: preidoicID } = test;

  // change to separate files
  let total = 0;
  let totalWithNumbers = 0;

  list.forEach((dailyTest) => {
    if (!dailyTest.morning.omitted) total++;
    if (!dailyTest.evening.omitted) total++;
    if (
      dailyTest.morning.SYS !== 0 &&
      dailyTest.morning.DIA !== 0 &&
      dailyTest.morning.PULSE !== 0 &&
      !dailyTest.morning.omitted
    )
      totalWithNumbers++;
    if (
      dailyTest.evening.SYS !== 0 &&
      dailyTest.evening.DIA !== 0 &&
      dailyTest.evening.PULSE !== 0 &&
      !dailyTest.evening.omitted
    )
      totalWithNumbers++;
  });
  // -----------------------

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
        dispach(
          setOmittedDailyTest(userID, preidoicID, dailyID, timeOfDay, omitted)
        );
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
          <SummaryBtn disabled={totalWithNumbers === total ? false : true}>
            Podsumowanie
          </SummaryBtn>
          <PdfBtn disabled={totalWithNumbers === total ? false : true}>
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
