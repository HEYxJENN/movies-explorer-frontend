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
        <form className="search-block__form" placeholder="Фильм">
          <input className="search-block__input" placeholder="Фильм" required />

          <div className="search-block__form-sign" />
          <button type="submit" className="search-block__find-button" />
        </form>
        <div className="search-block__short-switcher">
          <button className="search-block__switcher" onClick={onSwitcher}>
            {" "}
          </button>
          <p>Короткометражки</p>
        </div>
      </div>
      <div className="search-block__line" />
    </section>
  );
}

export default SearchForm;
