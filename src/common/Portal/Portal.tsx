import React from "react";
import ReactDom from "react-dom";

export enum PortalTarget {
  MODAL = "modal-portal",
  ROOT = "root",
}

export const Portal: React.FC<PortalProps> = ({ target, children }) => {
  const domElement = document.getElementById(target);

  return domElement ? ReactDom.createPortal(children, domElement) : null;
};

interface PortalProps {
  target: PortalTarget;
}
