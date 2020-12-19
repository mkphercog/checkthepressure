import React from "react";
import { IBloodPressureBasedOnAge } from "../../common/interfaces";
import {
  Bar,
  UserData,
  PressureMin,
  PressureNormal,
  PressureMax,
} from "./UserPressureBar.css";

export const UserPressureBar: React.FC<Props> = ({
  name,
  age,
  userBloodPressureBasedOnAge,
}) => {
  const { MIN, NORMAL, MAX } = userBloodPressureBasedOnAge;

  return (
    <Bar>
      <UserData>
        <p>
          <span>{name}, </span>
          wiek: {age}
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
  userBloodPressureBasedOnAge: IBloodPressureBasedOnAge;
}
