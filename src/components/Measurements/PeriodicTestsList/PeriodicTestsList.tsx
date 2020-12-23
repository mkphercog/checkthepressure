import React, { useState } from "react";
import { AddPeriodicTest } from "../../Popups/AddPeriodicTest/AddPeriodicTest";
import { IPeriodicPressureTests } from "../../../common/interfaces";
import { Portal, PortalTarget } from "../../../common/Portal/Portal";
import { Wrapper, FieldsetStyled } from "./PeriodicTestsList.css";
import { PeriodicTest } from "./PeriodicTest/PeriodicTest";
import { Legend } from "./../../../styles/mixins/Fieldset";
import { SharedAddButton } from "../../Buttons/SharedAddButton/SharedAddButton";
import { deletePeriodicPressureTest } from "./../../../store/actions/profilesAction";
import { useDispatch } from "react-redux";
import { WarningsYesNo } from "./../../Popups/Warnings/Warnings";

export const PeriodicTestsList: React.FC<IProps> = ({
  userID,
  tests,
  nextAvailablePeriodicTestID,
  openPeriodicTestDetails,
}) => {
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  const [popup, setPopup] = useState<Object>({});
  const dispatch = useDispatch();

  const handleDeletePeriodicTest = (id: number) => {
    setIsOpenPortal(true);
    setPopup(
      <WarningsYesNo
        message={`Usunąć pomiar okresowy #${id}?`}
        setIsOpen={setIsOpenPortal}
        response={(res: boolean) =>
          res && dispatch(deletePeriodicPressureTest(userID, id))
        }
      />
    );
  };

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

  const renderPeriodicTests =
    tests.map((test) => (
      <PeriodicTest
        key={test.id}
        test={test}
        openPeriodicTestDetails={openPeriodicTestDetails}
        deletePeriodicTest={handleDeletePeriodicTest}
      />
    )) || [];

  const legendTitle =
    userID === -1
      ? "Brak użytkownika"
      : renderPeriodicTests.length
      ? "Twoje pomiary okresowe"
      : "Dodaj swój pierwszy pomiar";

  return (
    <Wrapper>
      <FieldsetStyled>
        <Legend>{legendTitle}</Legend>
        <ul>{renderPeriodicTests}</ul>
        <SharedAddButton
          addFunction={handleAddPeriodicTest}
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
  openPeriodicTestDetails: (id: number) => void;
}
