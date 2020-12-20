import React, { useState } from "react";
import { AddPeriodicTest } from "../../Popups/AddPeriodicTest/AddPeriodicTest";
import { IPeriodicPressureTests } from "../../../common/interfaces";
import { Portal, PortalTarget } from "../../../common/Portal/Portal";
import { Wrapper, AddTestBtn } from "./PeriodicTestsList.css";
import { PeriodicTest } from "./PeriodicTest/PeriodicTest";
import {
  FieldsetStyled,
  LegendStyled,
} from "./../../../styles/mixins/Fieldset";

export const PeriodicTestsList: React.FC<Props> = ({
  userID,
  tests,
  nextAvailablePeriodicTestID,
  findTestsList,
}) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [popup, setPopup] = useState<Object>({});

  const renderPeriodicTests = tests.map((test) => (
    <PeriodicTest
      key={test.id}
      userID={userID}
      test={test}
      findTestsList={findTestsList}
    />
  ));

  return (
    <Wrapper>
      <FieldsetStyled>
        <LegendStyled>
          {userID === -1
            ? "Brak użytkownika"
            : renderPeriodicTests.length
            ? "Twoje pomiary okresowe"
            : "Dodaj swój pierwszy pomiar"}
        </LegendStyled>
        {renderPeriodicTests.length ? <ul>{renderPeriodicTests}</ul> : null}
        <AddTestBtn
          disabled={userID === -1}
          onClick={() => {
            setPopup(
              <AddPeriodicTest
                userID={userID}
                nextAvailablePeriodicTestID={nextAvailablePeriodicTestID}
                closePopup={setIsPortalOpen}
              />
            );
            setIsPortalOpen(true);
          }}
        >
          <i className="fas fa-plus"></i>
        </AddTestBtn>
        {isPortalOpen ? (
          <Portal target={PortalTarget.MODAL}>{popup}</Portal>
        ) : null}
      </FieldsetStyled>
    </Wrapper>
  );
};

interface Props {
  userID: number;
  nextAvailablePeriodicTestID: number;
  tests: IPeriodicPressureTests[];
  findTestsList: Function;
}
