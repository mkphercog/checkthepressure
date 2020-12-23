import React, { useState } from "react";
import { PeriodicTestsList } from "./PeriodicTestsList/PeriodicTestsList";
import { PeriodicTestDetails } from "./PeriodicTestDetails/PeriodicTestDetails";
import { IUser, IPeriodicPressureTests } from "./../../common/interfaces";
import BackGround from "./../../images/BG.jpg";
import { emptyPeriodicTest } from "./../../common/constants";
import { PageWrapperWithImageInBG } from "../../styles/mixins/PageBackGround";

export const Measurements: React.FC<IProps> = ({ selectedUser }) => {
  const [
    openedPeriodicTest,
    setOpenedPeriodicTest,
  ] = useState<IPeriodicPressureTests>();
  const [isOpenPeriodicTestDetails, setIsOpenPeriodicTestDetails] = useState(
    false
  );
  const {
    id,
    periodicPressureTests,
    nextAvailablePeriodicTestID,
  } = selectedUser;

  const handleOpenPeriodicTestDetails = (id: number) => {
    const getOpenedPeriodicTest = periodicPressureTests.find(
      (test) => id === test.id
    );
    setOpenedPeriodicTest(getOpenedPeriodicTest);
    setIsOpenPeriodicTestDetails(true);
  };

  return (
    <PageWrapperWithImageInBG>
      <img src={BackGround} alt="Blood Pressure" />
      {isOpenPeriodicTestDetails ? (
        <PeriodicTestDetails
          test={openedPeriodicTest || emptyPeriodicTest}
          userID={id}
          backToPeriodicTestsList={() => setIsOpenPeriodicTestDetails(false)}
        />
      ) : (
        <PeriodicTestsList
          userID={id}
          tests={periodicPressureTests}
          nextAvailablePeriodicTestID={nextAvailablePeriodicTestID}
          openPeriodicTestDetails={handleOpenPeriodicTestDetails}
        />
      )}
    </PageWrapperWithImageInBG>
  );
};

interface IProps {
  selectedUser: IUser;
}
