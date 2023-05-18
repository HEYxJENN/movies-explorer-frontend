import "./SavedMovies.css";
import { useState, useEffect } from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import React from "react";
import AuthX from "../../utils/MainApi";

import SearchForm from "../Movies/SearchForm/SearchForm";

function SavedMovies(props) {
  const [allMovies, setAllMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [areMoviesLoading, setAreMoviesLoading] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);

  React.useEffect(() => {
    AuthX.getSavedMovies().then((SavedMovies) => {
      console.log(SavedMovies);
      const arr = Object.values(SavedMovies.data);
      console.log(arr);
      setAllMovies(arr);
    });
  }, []);

  useEffect(() => {
    const filteredMovies = isShortFilm
      ? allMovies.filter((movie) => movie.duration >= 40)
      : allMovies;
    setVisibleMovies(filteredMovies);
  }, [isShortFilm, allMovies]);

  const handleSearch = (keyWord) => {
    setAreMoviesLoading(true);
    let matchedList = [];
    let matched = false;
    allMovies.filter((movie) => {
      if (movie.nameRU && movie.nameEN) {
        matched = (movie.nameRU + movie.nameEN)
          .toLowerCase()
          .includes(keyWord.toLowerCase());
      } else if (movie.nameEN) {
        matched = movie.nameEN.toLowerCase().includes(keyWord.toLowerCase());
      } else if (movie.nameRU) {
        matched = movie.nameRU.toLowerCase().includes(keyWord.toLowerCase());
      }
      if (matched) {
        matchedList.push(movie);
      }
      return matched;
    });
    console.log(matchedList);
    setVisibleMovies(matchedList);
    setAreMoviesLoading(false);
  };

  const handleSwitcher = (value) => {
    setIsShortFilm(value);
  };

  return (
    <section>
      <SearchForm
        onSwitcher={handleSwitcher}
        isSwitchedOn={isShortFilm}
        onSearch={handleSearch}
      />
      <section className="movies-block">
        {areMoviesLoading ? <Preloader /> : null}
        <MoviesCardList movies={visibleMovies} onSave={props.onSave} />
      </section>
    </section>
  );
}

export default SavedMovies;
