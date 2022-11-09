import React from "react";
import { CgClose } from "react-icons/cg";

import "./Study.css";

const Study = ({ study, handlestudyClick, handlestudyDeletion }) => {
  return (
    <div
      className="study-container"
      style={
        study.confirmed
          ? {
              textDecoration: "line-through",
              opacity: "0.5",
            }
          : {}
      }
    >
      <div className="study-title" onClick={() => handlestudyClick(study.id)}>
        {study.title}
      </div>

      <div className="buttons-container">
        <div className="time buttons-container">{study.time}</div>
        <button
          className="remove-study-button"
          onClick={() => handlestudyDeletion(study.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Study;
