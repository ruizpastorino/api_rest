import React, { useEffect, useState } from "react";
import { StyledInput, StyledSelect } from "../utilities/styled-inputs";
import Banner from "./banner";
import CharacterCard from "./character.card";
import Loading from "./loading";
import PagesButtons from "./pages-buttons";

const Home = () => {
  const [info, setInfo] = useState({});
  const [keyword, setKeyword] = useState("");
  const [charcacters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const api = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    handleQuery();
  }, []);

  const handleQuery = async (params) => {
    setLoading(true);
    const query = await fetch(params ? params : api);
    const { results, info } = await query.json();
    if (query.status === 200) {
      setCharacters(results);
      setInfo(info);
    } else {
      console.log(info);
      setCharacters([]);
      setInfo({ next: null, prev: null });
    }
    setLoading(false);
  };

  const handleSearchByName = () => {
    handleQuery(api + "?name=" + keyword);
  };

  return (
    <div className="d-flex screen">
      <Banner />
      <div className="flex-1 d-flex flex-column h-100">
        <div className="bg-secondary p-3 d-flex w-100 rounded">
          <div className="d-flex align-items-end">
            <StyledInput
              label="Buscar Personaje"
              style={{ marginRight: "20px" }}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button className="btn btn-primary mr-5" onClick={handleSearchByName}>
              <i className="fas fa-search display-6" />
            </button>
            <PagesButtons action={handleQuery} info={info} />
          </div>
        </div>
        <p className="font-italic p-2">Mostrando {info.count} resultados</p>
        {loading ? (
          <Loading />
        ) : charcacters.length ? (
          <div className="d-flex flex-wrap scroll-area flex-1 align-items-start">
            {charcacters.map((element, idx) => (
              <CharacterCard key={idx} data={element} />
            ))}
          </div>
        ) : (
          <div className="center-all w-100 h-100">
            <i className="fas fa-search display-3 mb-5" />
            <p className="strong-text display-5">Sin resultados</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
