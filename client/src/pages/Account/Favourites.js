import React, { useState, useEffect } from "react";

import FavouriteCard from "../../components/Account/FavouriteCard";

import { getFavourites } from "../../actions/favouriteBookActions";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    (async () => {
      setFavourites(await getFavourites());
    })();
  }, []);

  return (
    <div className="panel shadow-sm py-2 px-3">
      <div className="border-bottom">
        <h5>Favourites</h5>
      </div>
      {favourites.map((favourite) => (
        <FavouriteCard key={favourite.id} favourite={favourite} />
      ))}
    </div>
  );
};

export default Favourites;
