import React from "react";
import { sysDiaType } from "./AverageResults";
import {
  FieldsetStyled,
  LegendStyled,
  SysAndDiaColored,
} from "./AverageResults.css";

export enum resultNameType {
  morninig = "morning",
  evening = "evening",
  total = "total",
}

export const ResultsInFieldset: React.FC<IProps> = ({
  timeOfDayName,
  averageResults,
  resultName,
  getSysDiaColor,
}) => (
  <FieldsetStyled>
    <LegendStyled>{timeOfDayName}</LegendStyled>
    <p>
      Ciśnienie:{" "}
      <SysAndDiaColored
        color={getSysDiaColor(averageResults[resultName].SYS, sysDiaType.SYS)}
      >
        {averageResults[resultName].SYS}
      </SysAndDiaColored>
      /
      <SysAndDiaColored
        color={getSysDiaColor(averageResults[resultName].DIA, sysDiaType.DIA)}
      >
        {averageResults[resultName].DIA}
      </SysAndDiaColored>
    </p>
    <p>
      PULS: <span>{averageResults[resultName].PULSE}</span>
    </p>
  </FieldsetStyled>
);

interface IProps {
  timeOfDayName: string;
  averageResults: {
    morning: {
      SYS: number;
      DIA: number;
      PULSE: number;
    };
    evening: { SYS: number; DIA: number; PULSE: number };
    total: { SYS: number; DIA: number; PULSE: number };
  };
  resultName: resultNameType;
  getSysDiaColor: Function;
}
