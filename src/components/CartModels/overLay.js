import React from "react";
import ReactDOM from "react-dom";
import "./cartModel.css";
import Overlay from "react-bootstrap/Overlay";

const PortalEle = document.getElementById("OverLay");
const OverLay = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay className="model-Overlay">{props.children}</Overlay>,
        PortalEle
      )}

      {ReactDOM.createPortal(
        <div className="model-backdrop">{props.children}</div>,
        PortalEle
      )}
    </>
  );
};

export default OverLay;
