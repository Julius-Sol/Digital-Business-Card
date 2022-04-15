import React from "react";

function Information(props) {
  return (
    <div className="info-container">
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Information;
