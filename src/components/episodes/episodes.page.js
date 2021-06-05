import React, { useEffect, useState } from "react";
import Banner from "../home/banner";
import Loading from "../home/loading";
import CharactersGallery from "../utilities/characters-gallery";
import Picker from "../utilities/picker";

const EpisodePage = ({ match }) => {
  const [data, setData] = useState(null);
  const [pickedEpisodes, setPickedEpisodes] = useState(false);

  const handleQuery = async () => {
    const query = await fetch("https://rickandmortyapi.com/api/episode/" + match.params.id);
    const result = await query.json();
    if (query.status === 200) {
      setData(result);
      console.log(result);
    } else {
      console.log(result);
    }
  };

  useEffect(() => {
    handleQuery();
  }, [match.params.id]);

  return data === null ? (
    <div className="screen">
      <Loading />
    </div>
  ) : (
    <div className="screen d-flex">
      <Banner variant="danger" />
      <CharactersGallery
        data={data.characters}
        title={`Episodio: ${data.name} (${data.air_date}) - Personajes: ${data.characters.length}`}
        setPickedEpisodes={setPickedEpisodes}
      />
      {pickedEpisodes && (
        <Picker episodes={pickedEpisodes} close={() => setPickedEpisodes(false)} />
      )}
    </div>
  );
};

export default EpisodePage;
