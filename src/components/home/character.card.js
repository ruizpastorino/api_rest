import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ data }) => {
  return (
    <div style={{ width: "300px" }} className="bg-grey d-flex flex-column mr-2 mb-2 p-2">
      <div className="center-all">
        <img
          style={{ width: "200px", height: "200px", backgroundColor: "grey" }}
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
          <span className="font-weight-bold mr-2">Especie:</span> {data.species}
        </h5>
        <Link path={data.location} className="display-7 d-block text-info">
          <span className="font-weight-bold mr-2">Location:</span> {data.location.name}
        </Link>
        <Link className="display-7 d-block text-success">
          <span className="font-weight-bold mr-2">Episodios: </span> {data.episode.length}
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
