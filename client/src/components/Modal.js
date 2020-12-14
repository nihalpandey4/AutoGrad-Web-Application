import React from "react";
import ReactDOM from "react-dom";

import history from "./history";
import "./modal.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={() => history.push("/")}>
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}>
        <div className="header">{props.header}</div>
        <div className="content">{props.content}</div>
        {props.actions}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
