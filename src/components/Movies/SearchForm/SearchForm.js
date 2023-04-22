import React from "react";

import "./SearchForm.css";

function SearchForm(props) {
  return (
    <section>
      <div className="search-block">
        <form className="search-form" placeholder="Фильм">
          <input className="serch-input" placeholder="Фильм" />

          <div className="search-form-sign" />
          <button
            // onClick={props.Find}
            className="find-button"
          />
        </form>
        <div className="short-switcher">
          <button
            // onClick={props.Switcher}
            className="switcher"
          >
            {" "}
          </button>
          <p>Короткометражки</p>
        </div>
      </div>
      <div className="line" />
    </section>
  );
}

export default SearchForm;
