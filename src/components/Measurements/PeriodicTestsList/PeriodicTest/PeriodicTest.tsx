import React from "react";

import { IPeriodicPressureTests } from "common/interfaces";
import { SharedButton } from "components/shared/SharedButton/SharedButton";
import {
  SharedButtonStyles,
  SharedButtonIcons,
} from "components/shared/SharedButton/SharedButtonTypes";

import { Wrapper, Title, Subtitle, Info, Btns } from "./PeriodicTest.css";

interface IProps {
  test: IPeriodicPressureTests;
  openPeriodicTestDetails: (id: number) => void;
  deletePeriodicTest: (id: number) => void;
}

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
        <SharedButton onClick={() => openPeriodicTestDetails(id)}>
          Szczegóły...
        </SharedButton>
        <SharedButton
          onClick={() => deletePeriodicTest(id)}
          styles={SharedButtonStyles.delete}
          icon={SharedButtonIcons.delete}
        />
      </Btns>
    </Wrapper>
  );
};
