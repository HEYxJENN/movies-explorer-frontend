import React from "react";

import "./MoviesCardList.css";
import Movie from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <ul className="movies-elements">
      {/* {cards.map((card) => {
            return  */}
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      {/* })} */}
    </ul>
  );
}

export default MoviesCardList;
