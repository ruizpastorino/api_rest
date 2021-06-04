import React, { useEffect } from "react";
import SearchInput from "../utilities/search-input";
import CharacterCard from "./character.card";

const HomeScreen = () => {
  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const query = fetch("https://rickandmortyapi.com/api/character");
    const result = await query.json();
    console.log(result.result);
  };

  return (
    <div className="container">
      {/* <SearchInput /> */}
      <h5 className="strong-text">Personajes</h5>
      <div className="d-flex flex-wrap">
        <CharacterCard />
      </div>
    </div>
  );
};

export default HomeScreen;
