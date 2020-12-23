import React from "react";
import { IPeriodicPressureTests } from "../../../../common/interfaces";
import { GrayButton } from "./../../../../styles/mixins/Buttons";
import { SharedDeleteButton } from "./../../../SharedDeleteButton/SharedDeleteButton";
import { Wrapper, Title, Subtitle, Info, Btns } from "./PeriodicTest.css";

export const PeriodicTest: React.FC<IProps> = ({
  test,
  openPeriodicTestDetails,
  deletePeriodicTest,
}) => {
  const {
    id,
    start,
    end,
    days,
    state,
    totalNumberOfTests,
    numberOfTestsDone,
  } = test;

  return (
    <Wrapper>
      <Title>
        Pomiar okresowy <span>#{id}</span>
      </Title>
      <Subtitle>
        <p>
          od <span>{start}</span> do <span>{end}</span>
        </p>
      </Subtitle>

      <Info>
        Ilość dni: <span>{days}</span>
      </Info>

      <Info>
        Wykonane testy: <span>{numberOfTestsDone}</span>/
        <span>{totalNumberOfTests}</span>
      </Info>

      <Info>
        Status: <span>{state}</span>
      </Info>

      <Btns>
        <GrayButton onClick={() => openPeriodicTestDetails(id)}>
          Szczegóły...
        </GrayButton>
        <SharedDeleteButton deleteFunction={() => deletePeriodicTest(id)} />
      </Btns>
    </Wrapper>
  );
};

interface IProps {
  test: IPeriodicPressureTests;
  openPeriodicTestDetails: (id: number) => void;
  deletePeriodicTest: (id: number) => void;
}
