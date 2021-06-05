import React, { useEffect, useState } from "react";
import Loading from "../home/loading";
import InfoBanner from "./info-banner";
import CharactersGallery from "../utilities/characters-gallery";
import Picker from "../utilities/picker";

const Location = ({ match }) => {
  const [data, setData] = useState(null);
  const [pickedEpisodes, setPickedEpisodes] = useState(false);

  const handleQuery = async () => {
    const query = await fetch("https://rickandmortyapi.com/api/location/" + match.params.id);
    const result = await query.json();
    if (query.status === 200) {
      setData(result);
    } else {
      console.log(result);
    }
  };

  useEffect(() => {
    handleQuery();
  }, []);

  return data === null ? (
    <div className="screen">
      <Loading />
    </div>
  ) : (
    <div className="screen d-flex">
      <InfoBanner data={data} />
      <CharactersGallery
        data={data.residents}
        title={"Residentes de " + data.name}
        setPickedEpisodes={setPickedEpisodes}
      />
      {pickedEpisodes && (
        <Picker episodes={pickedEpisodes} close={() => setPickedEpisodes(false)} />
      )}
    </div>
  );
};

export default Location;
