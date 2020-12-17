import React, { useState } from "react";
import { PeriodicTestsList } from "./PeriodicTestsList/PeriodicTestsList";
import { PeriodicTestDetails } from "./PeriodicTestDetails/PeriodicTestDetails";
import {
  IUserInterface,
  IPeriodicPressureTests,
} from "./../../common/interfaces";
import BackGround from "./../../images/BG.jpg";
import { emptyPeriodicTest } from "./../../common/constants";
import { Wrapper } from "./Measurements.css";

export const Measurements: React.FC<MeasurementsProps> = ({ selectedUser }) => {
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
    <Wrapper>
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
    </Wrapper>
  );
};

interface MeasurementsProps {
  selectedUser: IUserInterface;
}
