import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import "./Toolbar.scss";

export default function Toolbar() {
  return (
    <div className="Toolbar">
      <div className="tool-button">
        <FontAwesomeIcon icon={faSquare} />
      </div>
    </div>
  );
}
