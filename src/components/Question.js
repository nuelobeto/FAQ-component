import React from "react";
import arrowDown from "../assets/icon-arrow-down.svg";

function Question({ obj, handleToggle }) {
  return (
    <div
      className={`question ${obj.open && "q-clicked"}`}
      onClick={() => handleToggle(obj.id)}
    >
      <h2>{obj.question}?</h2>
      <button className={`${obj.open && "clicked"}`}>
        <img src={arrowDown} alt="" />
      </button>
    </div>
  );
}

export default Question;
