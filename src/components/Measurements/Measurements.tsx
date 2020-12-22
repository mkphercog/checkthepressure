import React, { useState } from "react";
import { PeriodicTestsList } from "./PeriodicTestsList/PeriodicTestsList";
import { PeriodicTestDetails } from "./PeriodicTestDetails/PeriodicTestDetails";
import { IUser, IPeriodicPressureTests } from "./../../common/interfaces";
import BackGround from "./../../images/BG.jpg";
import { emptyPeriodicTest } from "./../../common/constants";
import { PageWrapperWithImageInBG } from "../../styles/mixins/PageBackGround";

export const Measurements: React.FC<IProps> = ({ selectedUser }) => {
  const [selectedPeriodicTest, setSelectedPeriodicTest] = useState<
    IPeriodicPressureTests | undefined
  >(emptyPeriodicTest);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const {
    periodicPressureTests,
    id,
    nextAvailablePeriodicTestID,
  } = selectedUser;

  const handleFindTest = (id: number) => {
    const findedTest = periodicPressureTests.find((test) => id === test.id);
    setSelectedPeriodicTest(findedTest);
    setIsDetailsOpen(true);
  };

  return (
    <PageWrapperWithImageInBG>
      <img src={BackGround} alt="Blood Pressure" />
      {isDetailsOpen ? (
        <PeriodicTestDetails
          test={selectedPeriodicTest || emptyPeriodicTest}
          userID={id}
          backToList={() => setIsDetailsOpen(false)}
        />
      ) : (
        <PeriodicTestsList
          userID={id}
          tests={periodicPressureTests}
          nextAvailablePeriodicTestID={nextAvailablePeriodicTestID}
          findTestsList={handleFindTest}
        />
      )}
    </PageWrapperWithImageInBG>
  );
};

interface IProps {
  selectedUser: IUser;
}
