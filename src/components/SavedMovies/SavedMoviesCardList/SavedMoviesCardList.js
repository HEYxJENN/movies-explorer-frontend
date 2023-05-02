import React from "react";
import "./SavedMoviesCardList.css";

import Movie from "../SavedMoviesCard/SavedMoviesCard.js";

function SavedMoviesCardList(props) {
  return (
    <ul className="movies-elements">
      {/* {cards.map((card) => {
            return  */}
      <Movie />
      <Movie />
      {/* })} */}
    </ul>
  );
}

export default SavedMoviesCardList;
