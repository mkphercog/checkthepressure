import React from "react";
import {
  Wrapper,
  MeasurementsList,
  MeasurementsDetails,
} from "./Measurements.css";

export const Measurements: React.FC = () => (
  <Wrapper>
    <MeasurementsList>
      <ul>
        <li>
          <h1>
            Pomiar okresowy <span>001</span>
          </h1>
          <h2>
            Start: <span>20-11-2020</span>
          </h2>
          <h2>
            Koniec: <span>27-11-2020</span>
          </h2>
          <h4>
            Czas trwania: <span>7</span> dni
          </h4>

          <p>
            Status: <span>Zakończono / W realizacji</span>
          </p>
          <button>Szczegóły...</button>
          <button>Usuń</button>
        </li>
      </ul>
      <button>Dodaj nowy pomiar okresowy</button>
    </MeasurementsList>
    <MeasurementsDetails>
      <h1>Pomiar okresowy 001</h1>
      <h2>(od 20-11-2020 do 27-11-2020)</h2>
      <ul>
        <li>
          <h3>20-11-2020</h3>
          <h4>RANO</h4>
          <p>
            SYS: <span>120</span>
          </p>
          <p>
            DIA: <span>70</span>
          </p>
          <p>
            PULS: <span>70</span>
          </p>
          <button>Edytuj</button>
          <button>Pomiń</button>
          <h4>WIECZÓR</h4>
          <p>
            SYS: <span>120</span>
          </p>
          <p>
            DIA: <span>70</span>
          </p>
          <p>
            PULS: <span>70</span>
          </p>
          <button>Edytuj</button>
          <button>Pomiń</button>
        </li>
      </ul>
      <button>Generuj PDF</button>
    </MeasurementsDetails>
  </Wrapper>
);
