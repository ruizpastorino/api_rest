import React from "react";

const Switch = ({ status, action }) => {
  return (
    <div className={`switch-area justify-content-${status ? "end" : "start"}`} onClick={action}>
      <div className={`switch-slider ${status ? "bg-white glow" : "bg-grey"}`}/>
    </div>
  );
};

export default Switch;
