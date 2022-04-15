import React from "react";

function Information(props) {
  return (
    <>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </>
  );
}

export default Information;
