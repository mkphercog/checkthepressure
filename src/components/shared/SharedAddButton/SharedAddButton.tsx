import React from "react";

import { AddButtonStyled } from "./SharedAddButton.css";

interface IProps {
  onClick: () => void;
  hoverDescription: string;
  isDisabled?: boolean;
}

export const SharedAddButton: React.FC<IProps> = ({
  onClick,
  hoverDescription,
  isDisabled,
}) => (
  <AddButtonStyled onClick={onClick} disabled={isDisabled}>
    <div>
      <p>{hoverDescription}</p>
    </div>
    <i className="fas fa-plus-circle"></i>
  </AddButtonStyled>
);
