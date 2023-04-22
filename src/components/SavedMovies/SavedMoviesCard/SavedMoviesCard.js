import React from "react";

import "./SavedMoviesCard.css";

import img from "../../../images/Greatest.webp";

function SavedMovie(props) {
  return (
    <li className="movie">
      <img className="movie__image" src={img} alt="alt" />
      <div className="movie__info">
        <p className="movie__name">Название</p>

        <div className="movie__duration-box">
          <p className="movie__duration">10000</p>
        </div>
      </div>
    </li>
  );
}

export default SavedMovie;
