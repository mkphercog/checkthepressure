import React from "react";

import { TimeOfDayAverageTypes, MeasurementSymbols } from "common/constants";

import { Legend } from "styles/mixins/Fieldset";
import { FieldsetStyled, SysAndDiaColored } from "./AverageResults.css";

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
  resultName: TimeOfDayAverageTypes;
  getSysDiaColor: Function;
}

export const ResultsInFieldset: React.FC<IProps> = ({
  timeOfDayName,
  averageResults,
  resultName,
  getSysDiaColor,
}) => (
  <FieldsetStyled>
    <Legend>{timeOfDayName}</Legend>
    <p>
      Ciśnienie:{" "}
      <SysAndDiaColored
        color={getSysDiaColor(
          averageResults[resultName].SYS,
          MeasurementSymbols.sys
        )}
      >
        {averageResults[resultName].SYS}
      </SysAndDiaColored>
      /
      <SysAndDiaColored
        color={getSysDiaColor(
          averageResults[resultName].DIA,
          MeasurementSymbols.dia
        )}
      >
        {averageResults[resultName].DIA}
      </SysAndDiaColored>
    </p>
    <p>
      PULS: <span>{averageResults[resultName].PULSE}</span>
    </p>
  </FieldsetStyled>
);
