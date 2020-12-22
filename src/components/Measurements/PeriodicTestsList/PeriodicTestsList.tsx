import React, { useState } from "react";
import { AddPeriodicTest } from "../../Popups/AddPeriodicTest/AddPeriodicTest";
import { IPeriodicPressureTests } from "../../../common/interfaces";
import { Portal, PortalTarget } from "../../../common/Portal/Portal";
import { Wrapper, FieldsetStyled } from "./PeriodicTestsList.css";
import { PeriodicTest } from "./PeriodicTest/PeriodicTest";
import { Legend } from "./../../../styles/mixins/Fieldset";
import { SharedAddButton } from "../../SharedAddButton/SharedAddButton";

export const PeriodicTestsList: React.FC<IProps> = ({
  userID,
  tests,
  nextAvailablePeriodicTestID,
  findTestsList,
}) => {
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  const [popup, setPopup] = useState<Object>({});

  const renderPeriodicTests = tests.map((test) => (
    <PeriodicTest
      key={test.id}
      userID={userID}
      test={test}
      findTestsList={findTestsList}
    />
  ));

  const handleAddPeriodicTest = () => {
    setPopup(
      <AddPeriodicTest
        userID={userID}
        nextAvailablePeriodicTestID={nextAvailablePeriodicTestID}
        setIsOpenAddPeriodicTestPopup={setIsOpenPortal}
      />
    );
    setIsOpenPortal(true);
  };

  return (
    <Wrapper>
      <FieldsetStyled>
        <Legend>
          {userID === -1
            ? "Brak użytkownika"
            : renderPeriodicTests.length
            ? "Twoje pomiary okresowe"
            : "Dodaj swój pierwszy pomiar"}
        </Legend>
        {renderPeriodicTests.length ? <ul>{renderPeriodicTests}</ul> : null}
        <SharedAddButton
          addFunction={() => handleAddPeriodicTest()}
          hoverDescription={"Dodaj nowy pomiar"}
          disabled={userID === -1}
        />
        {isOpenPortal ? (
          <Portal target={PortalTarget.MODAL}>{popup}</Portal>
        ) : null}
      </FieldsetStyled>
    </Wrapper>
  );
};

interface IProps {
  userID: number;
  nextAvailablePeriodicTestID: number;
  tests: IPeriodicPressureTests[];
  findTestsList: Function;
}
