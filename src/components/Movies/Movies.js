import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Movie from "./MoviesCard/MoviesCard";
import MoviesCardList from "./MoviesCardList/MoviesCardList.js";

import SearchForm from "./SearchForm/SearchForm.js";

import "./Movies.css";

function Movies(props) {
  return (
    <div>
      <Header onBurger={props.onBurger} />
      <SearchForm onSwitcher={props.onSwitcher} />
      <section>
        {/* <ul className="movies-elements"> */}
        <MoviesCardList />
        {/* </ul> */}
        <button className="more-films">Ещё</button>
      </section>

      <Footer />
    </div>
  );
}

export default Movies;
