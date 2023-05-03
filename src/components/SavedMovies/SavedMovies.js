import "./SavedMovies.css";

import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList.js";

import SearchForm from "../Movies/SearchForm/SearchForm";

function SavedMovies(props) {
  return (
    <section>
      <SearchForm
        onSwitcher={props.onSwitcher}
        isSwitchedOn={props.isSwitchedOn}
      />
      <section className="movies-block">
        {/* <ul className="movies-elements"> */}
        <SavedMoviesCardList />
        {/* </ul> */}
      </section>
    </section>
  );
}

export default SavedMovies;
