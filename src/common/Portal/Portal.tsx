import React from "react";
import ReactDom from "react-dom";
import { PortalBG } from "./Portal.css";

export enum PortalTarget {
  MODAL = "modal-portal",
  ROOT = "root",
}

export const Portal: React.FC<IProps> = ({ target, children }) => {
  const domElement = document.getElementById(target);

  return domElement
    ? ReactDom.createPortal(<PortalBG>{children}</PortalBG>, domElement)
    : null;
};

interface IProps {
  target: PortalTarget;
}