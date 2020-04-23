import React from "react";

import FavoriteCard from "../components/FavoriteCard";

const Favorites = () => {
  return (
    <div className="panel shadow-sm py-2 px-3">
      <div>
        <h5>Favorites</h5>
      </div>
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
    </div>
  );
};

export default Favorites;
