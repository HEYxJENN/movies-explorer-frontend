import React from "react";

import "./SearchForm.css";

const onSwitcher = () => {
  const switcherEl = document.querySelector(".switcher");
  switcherEl.style.backgroundImage = "url(../../../images/exit.svg);";
};

function SearchForm(props) {
  return (
    <section>
      <div className="search-block">
        <form className="search-form" placeholder="Фильм">
          <input className="serch-input" placeholder="Фильм" />

          <div className="search-form-sign" />
          <button type="submit" className="find-button" />
        </form>
        <div className="short-switcher">
          <button className="switcher" onClick={onSwitcher}>
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
