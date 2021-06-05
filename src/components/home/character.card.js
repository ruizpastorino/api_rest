import React from "react";

const CharacterCard = ({ data }) => {
  return (
    <div style={{ width: "250px" }} className="bg-grey d-flex flex-column m-2 p-2">
      <div className="center-all">
        <img
          style={{ width: "200px", height: "200px", backgroundColor:"grey" }}
          className="bg-white rounded-circle mb-3 hand-pointer"
          src={data.image}
          alt=""
        />
      </div>
      <div className="p-2">
        <h4 className="strong-text display-6">{data.name}</h4>
        <h5 className="display-7">
          <span className="font-weight-bold mr-2">Status: </span> {data.status}
        </h5>
        <h5 className="display-7">
          <span className="font-weight-bold mr-2">Especie:</span> {data.specie}
        </h5>
        <h5 className="display-7">
          <span className="font-weight-bold mr-2">Location:</span> {data.name}
        </h5>
        <h5 className="display-7">
          <span className="font-weight-bold mr-2">Episode: </span> {data.name}
        </h5>
      </div>
    </div>
  );
};

export default CharacterCard;
