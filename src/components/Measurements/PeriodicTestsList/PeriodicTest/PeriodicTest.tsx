import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IPeriodicPressureTests } from "../../../../common/interfaces";
import { deletePeriodicPressureTest } from "../../../../store/actions/profilesAction";
import { Portal, PortalTarget } from "./../../../../common/Portal/Portal";
import { WarningsYesNo } from "./../../../Popups/Warnings/Warnings";
import { GrayButton } from "./../../../../styles/mixins/Buttons";
import {
  Wrapper,
  Title,
  Subtitle,
  Info,
  Btns,
  DeleteBtn,
} from "./PeriodicTest.css";

export const PeriodicTest: React.FC<Props> = ({
  test,
  userID,
  findTestsList,
}) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [popup, setPopup] = useState<Object>({});
  const dispatch = useDispatch();
  const { id, start, end, days, state } = test;
  return (
    <Wrapper>
      <Title>
        Pomiar okresowy <span>#{id}</span>
      </Title>
      <Subtitle>
        <p>
          od <span>{start}</span> do <span>{end}</span>
        </p>
      </Subtitle>

      <Info>
        Status: <span>{state}</span>
      </Info>

      <Info>
        Ilość dni: <span>{days}</span>
      </Info>

      <Btns>
        <GrayButton onClick={() => findTestsList(id)}>Szczegóły...</GrayButton>
        <DeleteBtn
          onClick={() => {
            setIsPortalOpen(true);
            setPopup(
              <WarningsYesNo
                message={`Usunąć pomiar okresowy #${id}?`}
                close={setIsPortalOpen}
                response={(res: boolean) =>
                  res && dispatch(deletePeriodicPressureTest(userID, id))
                }
              />
            );
          }}
        >
          <i className="fas fa-trash"></i>
        </DeleteBtn>
      </Btns>
      {isPortalOpen ? (
        <Portal target={PortalTarget.MODAL}>{popup}</Portal>
      ) : null}
    </Wrapper>
  );
};

interface Props {
  test: IPeriodicPressureTests;
  userID: number;
  findTestsList: Function;
}
