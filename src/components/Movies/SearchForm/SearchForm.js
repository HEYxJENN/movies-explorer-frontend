import React, { useState } from "react";
import "./SearchForm.css";
import thumbsoff from "../../../images/switch.svg";
import thumbsOn from "../../../images/smalltumboff.svg";

function SearchForm(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isShortFilm, setIsShortFilm] = useState(false);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSwitchChange = () => {
    setIsShortFilm(!isShortFilm);
    props.onSwitcher(!isShortFilm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(searchQuery);
  };

  return (
    <section>
      <div className="search-block">
        <form className="search-block__form" onSubmit={handleSubmit}>
          <input
            className="search-block__input"
            placeholder="Фильм"
            value={searchQuery}
            onChange={handleInputChange}
            required
          />
          <div className="search-block__form-sign" />
          <button type="submit" className="search-block__find-button" />
        </form>
        <div className="search-block__short-switcher">
          <button
            className="search-block__switcher"
            style={{
              backgroundImage: `url(${isShortFilm ? thumbsOn : thumbsoff})`,
            }}
            onClick={handleSwitchChange}
          ></button>
          <p>Короткометражки</p>
        </div>
      </div>
      <div className="page__line" />
    </section>
  );
}

export default SearchForm;
