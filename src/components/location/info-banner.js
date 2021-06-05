import React from "react";

const InfoBanner = ({data}) => {
  return (
    <div
      style={{ width: "250px" }}
      className="bg-primary h-100 p-3 d-flex flex-column justify-content-center"
    >
      <h1 className="strong-text display-6 mb-5">{data.name}</h1>
      <div className="mb-4">
        <p className="strong-text">Tipo</p>
        <h5 className="w-100">{data.type}</h5>
      </div>
      <div className="mb-4">
        <p className="strong-text">Dimension</p>
        <h5 className="w-100">{data.dimension}</h5>
      </div>
      <div className="mb-4">
        <p className="strong-text">Residentes</p>
        <h5 className="w-100">{data.residents.length}</h5>
      </div>
    </div>
  );
};

export default InfoBanner;
