import React from "react";
import { IDailyTest } from "./../../../../common/interfaces";
import {
  Wrapper,
  MorningEvening,
  FieldsetStyled,
  SysDiaPuls,
  Btns,
} from "./DailyTest.css";

export const DailyTest: React.FC<Props> = ({ item, editDailyTest }) => {
  const { id, date, morning, evening } = item;
  return (
    <Wrapper>
      <h4>
        Dzień {id} - (<span>{date}</span>)
      </h4>

      <FieldsetStyled sys={morning.SYS} dia={morning.DIA} pulse={morning.PULSE}>
        <MorningEvening
          sys={morning.SYS}
          dia={morning.DIA}
          pulse={morning.PULSE}
        >
          <p>{morning.timeOfDay}</p>
        </MorningEvening>
        <SysDiaPuls>
          <p>
            SYS: <span>{morning.SYS}</span>
          </p>
          <p>
            DIA: <span>{morning.DIA}</span>
          </p>
          <p>
            PULS: <span>{morning.PULSE}</span>
          </p>
        </SysDiaPuls>
        <Btns>
          <button onClick={() => editDailyTest(id, morning.timeOfDay, date)}>
            Edytuj
          </button>
          <button onClick={() => {}}>Pomiń</button>
        </Btns>
      </FieldsetStyled>

      <FieldsetStyled sys={evening.SYS} dia={evening.DIA} pulse={evening.PULSE}>
        <MorningEvening
          sys={evening.SYS}
          dia={evening.DIA}
          pulse={evening.PULSE}
        >
          <p>{evening.timeOfDay}</p>
        </MorningEvening>
        <SysDiaPuls>
          <p>
            SYS: <span>{evening.SYS}</span>
          </p>
          <p>
            DIA: <span>{evening.DIA}</span>
          </p>
          <p>
            PULS: <span>{evening.PULSE}</span>
          </p>
        </SysDiaPuls>
        <Btns>
          <button onClick={() => editDailyTest(id, evening.timeOfDay, date)}>
            Edytuj
          </button>
          <button onClick={() => {}}>Pomiń</button>
        </Btns>
      </FieldsetStyled>
    </Wrapper>
  );
};

interface Props {
  item: IDailyTest;
  editDailyTest: Function;
}
