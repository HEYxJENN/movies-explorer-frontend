import React, { useState, useEffect } from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import AuthX from "../../utils/MainApi";
import SearchForm from "../Movies/SearchForm/SearchForm";

function SavedMovies(props) {
  const [allMovies, setAllMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [areMoviesLoading, setAreMoviesLoading] = useState(true);
  const [isShortFilm, setIsShortFilm] = useState(false);

  React.useEffect(() => {
    AuthX.getSavedMovies()
      .then((savedMovies) => {
        const arr = Object.values(savedMovies.data);
        setAllMovies(arr);
        setVisibleMovies(arr);
        setAreMoviesLoading(false);
      })
      .catch((error) => {
        console.log("Error retrieving saved movies:", error);
      });
  }, []);

  useEffect(() => {
    const filteredMovies = isShortFilm
      ? allMovies.filter((movie) => movie.duration >= 40)
      : allMovies;
    setVisibleMovies(filteredMovies);
  }, [isShortFilm, allMovies]);

  const handleSearch = (keyword) => {
    setAreMoviesLoading(true);
    const matchedList = allMovies.filter((movie) => {
      const movieName = movie.nameRU ? movie.nameRU.toLowerCase() : "";
      const movieNameEN = movie.nameEN ? movie.nameEN.toLowerCase() : "";
      const lowerKeyword = keyword.toLowerCase();
      return (
        movieName.includes(lowerKeyword) || movieNameEN.includes(lowerKeyword)
      );
    });
    setVisibleMovies(matchedList);
    setAreMoviesLoading(false);
  };

  const handleSwitcher = (value) => {
    setIsShortFilm(value);
  };

  const handleRemove = (movieId) => {
    AuthX.removeSavedMovie(movieId)
      .then(() => {
        const updatedMovies = allMovies.filter(
          (movie) => movie._id !== movieId
        );
        setAllMovies(updatedMovies);
        setVisibleMovies(updatedMovies);
      })
      .catch((error) => {
        console.log("Error deleting movie:", error);
      });
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
        <MoviesCardList
          movies={visibleMovies}
          onSave={props.onSave}
          onDel={handleRemove}
        />
      </section>
    </section>
  );
}

export default SavedMovies;
