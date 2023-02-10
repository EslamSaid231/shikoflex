import React from "react";

export default function Scroll(props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px black solid",
        height: "500px",
        marginTop: "25px",
      }}
    >
      {props.children}
    </div>
  );
}
