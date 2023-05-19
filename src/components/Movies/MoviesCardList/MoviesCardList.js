import React from "react";
import { useLocation } from "react-router-dom";

import "./MoviesCardList.css";
import Movie from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const location = useLocation();

  return (
    <ul className="movies-elements">
      {props.movies.map((movie) => {
        return (
          <Movie
            img={
              location.pathname === "/movies"
                ? `https://api.nomoreparties.co/${movie.image.url}`
                : movie.thumbnail
            }
            duration={movie.duration}
            name={movie.nameRU}
            key={movie.id}
            onSave={props.onSave}
            onDel={props.onDel}
            data={movie}
          />
        );
      })}
    </ul>
  );
}

export default MoviesCardList;
