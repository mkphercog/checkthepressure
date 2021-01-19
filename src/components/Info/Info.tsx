import React from "react";

import { SharedPageWrapper } from "components/shared/SharedPageWrapper/SharedPageWrapper";

import { Legend } from "styles/mixins/Fieldset";
import { FieldsetStyled } from "./Info.css";

export const Info: React.FC = () => (
  <SharedPageWrapper>
    <FieldsetStyled>
      <Legend>Informacje</Legend>
      <div>
        <p>
          <span>Ważna uwaga!</span> Po usunięciu{" "}
          <span>historii przeglądania w przeglądarce</span> zapisane dane w
          aplikacji zostaną utracone, ponieważ strona nie wykorzystuje serwera
          do przechowywania danych!
        </p>
      </div>
      <div>
        <p>
          Strona Badaj Ciśnienie jest tylko zapisem okresowych pomiarów
          ciśnienia krwi użytkownika. Wszelkie oznaczenia kolorystyczne używane
          na stronie (min, norma, max - względem wieku) są tylko poglądowe i nie
          zastąpią <span>konsultacji z lekarzem prowadzącym.</span>
        </p>
      </div>
      <div>
        <p>
          Projekt i realizacja:{" "}
          <a
            href="https://mkphercog.github.io/mywebsite/#/"
            target="_blank"
            rel="noreferrer"
          >
            Marcin Hercog
          </a>
        </p>
      </div>
    </FieldsetStyled>
  </SharedPageWrapper>
);
