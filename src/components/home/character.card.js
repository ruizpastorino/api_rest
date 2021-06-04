import React from "react";

const CharacterCard = ({data}) => {
  return (
    <div style={{width: "250px", }} className="bg-grey d-flex flex-column">
      <div style={{height: "200px", padding: "20px" }}>
        <img className="bg-white w-100 h-100" src="" alt="" />
      </div>
      <div className="p-2">
        <h4 className="strong-text display-6">Nombre de personaje</h4>
        <h5 className="display-7">
          <span className="font-weight-bold mr-2">Status: </span> Informacion
        </h5>
        <h5 className="display-7">
          <span className="font-weight-bold mr-2">Especie:</span> Informacion
        </h5>
        <h5 className="display-7">
          <span className="font-weight-bold mr-2">Location:</span> Informacion
        </h5>
        <h5 className="display-7">
          <span className="font-weight-bold mr-2">Episode: </span> Informacion
        </h5>
      </div>
    </div>
  );
};

export default CharacterCard;
