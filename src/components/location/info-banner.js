import React from "react";

const InfoBanner = ({ data }) => {
  return (
    <div
      style={{ width: "200px" }}
      className="bg-success h-100 p-3 d-flex flex-column justify-content-center"
    >
      <h6 style={{ lineHeight: "30px" }} className="strong-text display-4 mb-3">
        Rick and Morty
      </h6>
      <h1 className="strong-text display-7 mb-2">{data.name}</h1>
      <div className="mb-3">
        <p className="strong-text">Tipo</p>
        <h6 className="w-100">{data.type}</h6>
      </div>
      <div className="mb-3">
        <p className="strong-text">Dimension</p>
        <h6 className="w-100">{data.dimension}</h6>
      </div>
      <div className="mb-3">
        <p className="strong-text">Residentes</p>
        <h6 className="w-100">{data.residents.length}</h6>
      </div>
    </div>
  );
};

export default InfoBanner;
