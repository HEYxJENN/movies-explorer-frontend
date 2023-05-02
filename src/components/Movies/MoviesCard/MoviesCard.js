import React from "react";
import "./MoviesCard.css";

import img from "../../../images/Greatest.webp";

function Movie(props) {
  return (
    <li className="movie">
      <button className="movie__save">Сохранить</button>
      <img className="movie__image" src={img} alt="alt" />
      <div className="movie__info">
        <p className="movie__name">Название</p>

        <p className="movie__duration-box"> 10ч 10м</p>
      </div>
    </li>
  );
}

export default Movie;
