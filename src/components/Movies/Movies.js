import React, { useState, useEffect } from "react";
import ApiX from "../../utils/MoviesApi";
import SearchForm from "./SearchForm/SearchForm.js";
import MoviesCardList from "./MoviesCardList/MoviesCardList.js";
import "./Movies.css";
import Preloader from "./Preloader/Preloader";

function Movies(props) {
  const [allMovies, setAllMovies] = useState([]);
  const [numCards, setNumCards] = useState(12);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [areMoviesLoading, setAreMoviesLoading] = useState(true);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    setAreMoviesLoading(true);

    ApiX.getMovies().then((movies) => {
      setAllMovies(movies);
    });
    setAreMoviesLoading(false);
  }, []);

  useEffect(() => {
    setAreMoviesLoading(true);
    const updateNumCards = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setNumCards(12);
      } else if (screenWidth >= 768) {
        setNumCards(8);
      } else {
        setNumCards(6);
      }
      setAreMoviesLoading(false);
    };

    window.addEventListener("resize", updateNumCards);
    updateNumCards();

    return () => {
      window.removeEventListener("resize", updateNumCards);
    };
  }, []);

  useEffect(() => {
    setAreMoviesLoading(true);

    const filteredMovies = isShortFilm
      ? allMovies.filter((movie) => movie.duration >= 40).slice(0, numCards)
      : allMovies.slice(0, numCards);
    setVisibleMovies(filteredMovies);
    setAreMoviesLoading(false);
  }, [isShortFilm, allMovies, numCards]);

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

    // Проверяем, есть ли результаты поиска
    if (matchedList.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }

    setVisibleMovies(matchedList);
    setAreMoviesLoading(false);
  };

  const handleShowMore = () => {
    const currentLength = visibleMovies.length;
    const nextMovies = allMovies.slice(currentLength, currentLength + numCards);
    setVisibleMovies((prevMovies) => [...prevMovies, ...nextMovies]);
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
      {areMoviesLoading ? <Preloader /> : null}

      <section className="movies-block">
        {noResults ? (
          <p className="no-results">Ничего не найдено</p>
        ) : (
          <MoviesCardList
            movies={visibleMovies}
            onSave={props.onSave}
            onDel={props.onDel}
          />
        )}
        {allMovies.length > numCards &&
          visibleMovies.length < allMovies.length && (
            <button className="more-films" onClick={handleShowMore}>
              Ещё
            </button>
          )}
      </section>
    </section>
  );
}

export default Movies;
