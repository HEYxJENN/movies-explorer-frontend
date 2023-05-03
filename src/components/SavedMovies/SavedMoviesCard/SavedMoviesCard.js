import React from "react";

import "./SavedMoviesCard.css";

import img from "../../../images/Greatest.webp";

function SavedMovie(props) {
  return (
    <li className="movie">
      <div className="movie__remove" />
      <img className="movie__image" src={img} alt="alt" />
      <div className="movie__info">
        <p className="movie__name">Название</p>

        <p className="movie__duration-box"> 10000</p>
      </div>
    </li>
  );
}

export default SavedMovie;
