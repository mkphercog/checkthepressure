import React from "react";
import { bloodPressureTable } from "./../../common/bloodPressureTable";
import {
  Bar,
  UserData,
  PressureMin,
  PressureNormal,
  PressureMax,
} from "./UserPressureBar.css";

export const UserPressureBar: React.FC<Props> = ({ name, age }) => {
  const findUserBloodPressure = bloodPressureTable.find((obj) => {
    if (age <= obj.age) {
      return obj;
    }
    return obj.age === 65;
  });

  const { MIN, NORMAL, MAX } = findUserBloodPressure || {
    MIN: { SYS: 0, DIA: 0 },
    NORMAL: { SYS: 0, DIA: 0 },
    MAX: { SYS: 0, DIA: 0 },
  };

  return (
    <Bar>
      <UserData>
        <p>
          <span>{name} </span>
          {age} lat
        </p>
      </UserData>
      <PressureMin>
        <p>
          MIN: {MIN.SYS}/{MIN.DIA}
        </p>
      </PressureMin>

      <PressureNormal>
        <p>
          NORMA: {NORMAL.SYS}/{NORMAL.DIA}
        </p>
      </PressureNormal>

      <PressureMax>
        <p>
          MAX: {MAX.SYS}/{MAX.DIA}
        </p>
      </PressureMax>
    </Bar>
  );
};

interface Props {
  name: string;
  age: number;
}
