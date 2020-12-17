import React from "react";
import { IDailyTest } from "./../../../../common/interfaces";
import { Wrapper, MorningEvening, SysDiaPuls, Btns } from "./DailyTest.css";

export const DailyTest: React.FC<Props> = ({ item, editDailyTest }) => {
  const { id, date, morning, evening } = item;
  return (
    <Wrapper>
      <h4>
        Dzień {id} - (<span>{date}</span>)
      </h4>

      <fieldset>
        <MorningEvening>
          <p>Rano</p>
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
          <button onClick={() => editDailyTest(id, "morning", date)}>
            Edytuj
          </button>
          <button onClick={() => {}}>Pomiń</button>
        </Btns>
      </fieldset>

      <fieldset>
        <MorningEvening>
          <p>Wieczór</p>
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
          <button onClick={() => editDailyTest(id, "evening", date)}>
            Edytuj
          </button>
          <button onClick={() => {}}>Pomiń</button>
        </Btns>
      </fieldset>
    </Wrapper>
  );
};

interface Props {
  item: IDailyTest;
  editDailyTest: Function;
}
