import React from "react";
import {} from "./../../Popups/Information/Information";
import { InfoButtonStyled } from "./SharedInfoButton.css";

export const SharedInfoButton: React.FC<IProps> = ({ onClick }) => (
  <InfoButtonStyled onClick={() => onClick()}>
    <i className="fas fa-info-circle"></i>
  </InfoButtonStyled>
);

interface IProps {
  onClick: Function;
}
