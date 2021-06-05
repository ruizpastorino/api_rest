import React from "react";

const InfoBanner = ({ data }) => {
  return (
    <div
      style={{ width: "250px" }}
      className="bg-success h-100 p-3 d-flex flex-column justify-content-center"
    >
      <h4 style={{ lineHeight: "50px" }} className="strong-text display-3 mb-3">
        Rick and Morty
      </h4>
      <h1 className="strong-text display-6 mb-2">{data.name}</h1>
      <div className="mb-3">
        <p className="strong-text">Tipo</p>
        <h5 className="w-100">{data.type}</h5>
      </div>
      <div className="mb-3">
        <p className="strong-text">Dimension</p>
        <h5 className="w-100">{data.dimension}</h5>
      </div>
      <div className="mb-3">
        <p className="strong-text">Residentes</p>
        <h5 className="w-100">{data.residents.length}</h5>
      </div>
    </div>
  );
};

export default InfoBanner;
