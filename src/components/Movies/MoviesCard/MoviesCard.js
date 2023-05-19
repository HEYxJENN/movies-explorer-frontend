import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./MoviesCard.css";

function Movie(props) {
  const location = useLocation();
  const [saved, setSaved] = useState(
    location.pathname === "/movies" ? false : true
  );

  function convertMinutesToHours() {
    let time = props.duration;
    const hours = Math.floor(time / 60);
    const remainingMinutes = time % 60;
    return `${hours} ч ${remainingMinutes} м`;
  }

  function handleTrailerPlay(trailer) {
    const video = trailer.trailerLink;
    console.log(video);
    window.open(video, "_blank");
  }

  const handleSave = () => {
    console.log("saved");
    let data = {};
    let mainUrl = "https://api.nomoreparties.co";
    console.log(props.data);
    data = {
      country: props.data.country,
      director: props.data.director,
      duration: props.data.duration,
      year: props.data.year,
      description: props.data.description,
      image: `${mainUrl}${props.data.image.url}`,
      trailerLink: props.data.trailerLink,
      thumbnail: `${mainUrl}${props.data.image.url}`,
      movieId: props.data.id,
      nameRU: props.data.nameRU,
      nameEN: props.data.nameEN,
    };
    console.log(data);
    props.onSave(data);
    setSaved(true);
  };

  const handleRemove = () => {
    console.log("removed");
    let id = props.data._id;
    props.onDel(id);
    setSaved(false);
  };

  return (
    <li className="movie">
      {!saved ? (
        <button className="movie__save" onClick={handleSave}>
          Сохранить
        </button>
      ) : (
        <button className="movie__delete" onClick={handleRemove}>
          x
        </button>
      )}
      <img
        className="movie__image"
        src={props.img}
        alt="alt"
        onClick={() => handleTrailerPlay(props.data)}
      />
      <div className="movie__info">
        <p className="movie__name">{props.name}</p>

        <p className="movie__duration-box">{convertMinutesToHours()}</p>
      </div>
    </li>
  );
}

export default Movie;

// {
// "country":"rus",
// "director":"hz",
// "duration":"126",
// "year":"2000",
// "description":"Greatest",
// "image":"http://examples.com",
// "trailerLink":"http://examples.com",
// "thumbnail":"http://examples.com",
// "nameRU":"Green Elephant2",
// "nameEN":"Зеленый Слоник2"
// }
