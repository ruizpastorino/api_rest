import React, { useState } from "react";

const ToolsWrapper = ({ children, title }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ right: open ? "0px" : "-300px" }} className="ml-3 side-tools">
      <div className="position-relative">
        <div className="tool-tab" opened="true" onClick={() => setOpen(!open)}>
          <i className={`fas fa-chevron-${open ? "right" : "left"}`} />
        </div>
        <div className="p-3">
          <h5 className="strong-text">{title}</h5>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ToolsWrapper;
