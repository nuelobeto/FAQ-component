import React from "react";

function Answer({ obj }) {
  return <div className={`answer ${!obj.open && "close"}`}>{obj.answer}</div>;
}

export default Answer;
