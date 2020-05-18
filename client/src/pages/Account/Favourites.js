import React, { useState, useEffect, useContext } from "react";

import FavouriteCard from "../../components/Account/FavouriteCard";

import { getFavourites } from "../../actions/favouriteBookActions";

import { ErrorContext } from "../../context/errorContext";

const Favourites = () => {
  const { setError } = useContext(ErrorContext);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    (async () => {
      setFavourites(await getFavourites(setError));
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
