import React from "react";

const Banner = ({ variant = "light" }) => {
  return (
    <div style={{ width: "250px" }} className={`p-4 h-100  bg-${variant} center-all mr-2`}>
      <h4 style={{ lineHeight: "50px" }} className="strong-text display-3">
        Rick and Morty
      </h4>
      <p className="display-6 strong-text w-100 mt-3">Api Rest Demo</p>
    </div>
  );
};

export default Banner;
