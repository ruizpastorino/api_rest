import React from "react";


export const StyledInput = ({ reff, label, icon, onChange, name, value, placeholder = "", colorIcon = "orange", type = "text", style }) => {
  return (
    <div style={style} className="d-flex align-items-end my-2">
      {icon && (
        <div style={{ width: "40px", height: "40px" }} className="center-all align-items-start">
          <i style={{ color: colorIcon }} className={"fas display-6 fa-" + icon} />
        </div>
      )}
      <div className="flex-1">
        <label>{label}</label>
        <input className="text-success text-lowercase bg-light" ref={reff} name={name} value={value} type={type} value={value} onChange={onChange} placeholder={placeholder} />
      </div>
    </div>
  );
};

export const StyledSelect = ({ reff, label, icon, onChange, name, value, colorIcon = "orange", children, style }) => {
  return (
    <div style={style} className="d-flex align-items-end my-2">
      {icon && (
        <div style={{ width: "40px", height: "40px" }} className="center-all align-items-start">
          <i style={{ color: colorIcon }} className={"fas display-6 fa-" + icon} />
        </div>
      )}
      <div className="flex-1">
        <label>{label}</label>
        <select ref={reff} name={name} value={value} className="text-capitalize bg-light" onChange={onChange}>
          {children}
        </select>
      </div>
    </div>
  );
};
