import React from "react";
import { useDispatch } from "react-redux";
import { IPeriodicPressureTests } from "../../../../common/interfaces";
import { deletePeriodicPressureTest } from "../../../../store/actions/profilesAction";
import {
  Wrapper,
  Title,
  Subtitle,
  Duration,
  Status,
  Btns,
  DeleteBtn,
  DetailsBtn,
} from "./PeriodicTest.css";

export const PeriodicTest: React.FC<Props> = ({
  test,
  userID,
  findTestsList,
}) => {
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

      <Status>
        Status: <span>{state}</span>
      </Status>

      <Duration>
        Ilość dni: <span>{days}</span>
      </Duration>

      <Btns>
        <DetailsBtn onClick={() => findTestsList(id)}>Szczegóły...</DetailsBtn>
        <DeleteBtn
          onClick={() => {
            dispatch(deletePeriodicPressureTest(userID, id));
          }}
        >
          <i className="fas fa-trash"></i>
        </DeleteBtn>
      </Btns>
    </Wrapper>
  );
};

interface Props {
  test: IPeriodicPressureTests;
  userID: number;
  findTestsList: Function;
}
