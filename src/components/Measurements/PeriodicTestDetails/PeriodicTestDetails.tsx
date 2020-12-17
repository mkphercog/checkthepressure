import React, { useState } from "react";
import { IPeriodicPressureTests } from "../../../common/interfaces";
import { Portal, PortalTarget } from "../../../common/Portal/Portal";
import { EditDailyTest } from "../../Popups/EditDailyTest/EditDailyTest";
import { DailyTest } from "./DailyTest/DailyTest";
import { Wrapper, BackArrow } from "./PeriodicTestDetails.css";

export const PeriodicTestDetails: React.FC<Props> = ({
  test,
  userID,
  backToList,
}) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [popup, setPopup] = useState<Object>({});
  const { list, id: preidoicID } = test;
  const renderList = list.map((item) => (
    <DailyTest
      key={item.id}
      item={item}
      editDailyTest={(dailyID: number, timeOfDay: string, date: string) => {
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
    />
  ));

  return (
    <Wrapper>
      <fieldset>
        <legend>
          Pomiar okresowy <span>#{preidoicID}</span>
        </legend>
        <ul>
          {renderList}

          {/* <button>Generuj PDF</button> */}
        </ul>
        <button onClick={() => backToList()}>
          <BackArrow className="fas fa-long-arrow-alt-left"></BackArrow>
        </button>
      </fieldset>
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