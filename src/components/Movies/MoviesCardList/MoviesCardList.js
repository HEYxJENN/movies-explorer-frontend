import React from "react";

import "./MoviesCardList.css";
import Movie from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <ul className="movies-elements">
      {props.movies.map((movie) => {
        return (
          <Movie
            img={`https://api.nomoreparties.co/${movie.image.url}`}
            duration={movie.duration}
            name={movie.nameRU}
            key={movie.id}
            onSave={props.onSave}
            data={movie}
          />
        );
      })}
    </ul>
  );
}

export default MoviesCardList;
