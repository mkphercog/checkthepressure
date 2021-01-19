import React, { useState } from "react";

import { IUser, IPeriodicPressureTests } from "common/interfaces";
import { emptyPeriodicTest } from "common/constants";
import { SharedPageWrapper } from "components/shared/SharedPageWrapper/SharedPageWrapper";
import { PeriodicTestsList } from "./PeriodicTestsList/PeriodicTestsList";
import { PeriodicTestDetails } from "./PeriodicTestDetails/PeriodicTestDetails";

interface IProps {
  selectedUser: IUser;
}

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
    <SharedPageWrapper>
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
    </SharedPageWrapper>
  );
};
