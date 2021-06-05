import React, { useEffect, useState } from "react";
import { StyledInput, StyledSelect } from "../utilities/styled-inputs";
import CharacterCard from "./character.card";
import Loading from "./loading";

const HomeScreen = () => {
  let [pagesLength, setPagesLength] = useState([0]);
  const [name, setName] = useState("");
  const [characaters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStart();
  }, []);

  const generatePages = (ending) => {
    console.log(ending);
    const pagesLength = [];
    for (let x = 0; x < ending; x++) {
      pagesLength.push(x + 1);
    }
    setPagesLength(pagesLength);
  };

  const getStart = async () => {
    try {
      setLoading(true);
      const query = await fetch("https://rickandmortyapi.com/api/character/?page=0");
      const result = await query.json();
      setCharacters(result.results);
      generatePages(result.info.pages);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const pagesHandler = async ({ target }) => {
    setLoading(true);
    try {
      const query = await fetch("https://rickandmortyapi.com/api/character/?page=" + target.value);
      const result = await query.json();
      setCharacters(result.results);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleSearchByName = async () => {
    if (name !== "") {
      const query = await fetch("https://rickandmortyapi.com/api/character/?name=" + name);
      const result = await query.json();
      pagesHandler(result.info.pages);
      setCharacters(result.results);
    }
  };

  return (
    <div className="container d-flex flex-column screen">
      <div className="bg-secondary p-3 d-flex w-100 rounded">
        <div className="d-flex align-items-end">
          <StyledInput
            label="Buscar Personaje"
            style={{ marginRight: "20px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn btn-primary mr-5" onClick={handleSearchByName}>
            <i className="fas fa-search display-6" />
          </button>
        </div>
        <StyledSelect label="Pagina" icon="file" onChange={pagesHandler}>
          {pagesLength.map((page) => (
            <option key={page} value={page}>
              {page}
            </option>
          ))}
        </StyledSelect>
      </div>
      <h5 className="strong-text my-3">Personajes</h5>
      {loading ? (
        <Loading />
      ) : (
        <div className="d-flex flex-wrap scroll-area flex-1">
          {characaters.map((element, idx) => (
            <CharacterCard key={idx} data={element} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
