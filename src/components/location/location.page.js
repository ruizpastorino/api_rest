import React, { useEffect, useState } from "react";
import Loading from "../home/loading";
import InfoBanner from "./info-banner";
import ResidentsGallery from "./residents-gallery";

const Location = ({ match }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuery = async () => {
    setLoading(true);
    const query = await fetch("https://rickandmortyapi.com/api/location/" + match.params.id);
    const result = await query.json();
    if (query.status === 200) {
      setData(result);
    } else {
      console.log(result);
    }
    setLoading(false);
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
      <ResidentsGallery data={data.residents} />
    </div>
  );
};

export default Location;
