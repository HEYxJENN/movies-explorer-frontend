import "./SavedMovies.css";

import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Movie from "./MoviesCard/MoviesCard";
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList.js";

import SearchForm from "../Movies/SearchForm/SearchForm";

function Movies(props) {
  return (
    <section>
      <Header />
      <SearchForm />
      <section>
        {/* <ul className="movies-elements"> */}
        <SavedMoviesCardList />
        {/* </ul> */}
      </section>
      <Footer />
    </section>
  );
}

export default Movies;
