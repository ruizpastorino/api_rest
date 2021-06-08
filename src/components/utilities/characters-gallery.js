import React, { useEffect, useState } from "react";
import CharacterCard from "../home/character.card";
import Loading from "../home/loading";
import Pagination from "./pagination";
import { Link } from "react-router-dom";

const CharactersGallery = ({ data, title, setPickedEpisodes }) => {
  let [results, setResults] = useState([]);
  let [range, setRange] = useState({ min: 1, max: 25 });
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    getResidentsInfo(range);
  }, [data]);

  const getResidentsInfo = async (range) => {
    setLoading(true);
    const charactersID = [];
    for (let x = range.min; x < range.max; x++) {
      if (data[x] !== undefined) {
        let currentID = data[x].split("character/")[1];
        charactersID.push(currentID);
      }
    }
    const query = await fetch("https://rickandmortyapi.com/api/character/" + charactersID);
    const result = await query.json();
    setResults(result);
    setLoading(false);
  };

  useEffect(() => {
    getResidentsInfo(range);
  }, [range]);

  return (
    <div className="ml-3 flex-1 d-flex flex-column h-100">
      <div className="d-flex bg-light p-3">
        <h6 className="strong-text flex-1 m-0">{title}</h6>
        <Link to="/" className="m-0 px-2 text-warning display-8">
          Volver <i className="fas fa-home text-warning" />
        </Link>
      </div>
      <div className="d-flex flex-wrap align-items-start scroll-area flex-1">
        {loading ? (
          <Loading />
        ) : (
          results.map((route, idx) => {
            return <CharacterCard key={idx} data={route} setPickedEpisodes={setPickedEpisodes} />;
          })
        )}
      </div>
      <Pagination length={data.length} setRange={setRange} />
    </div>
  );
};

export default CharactersGallery;
