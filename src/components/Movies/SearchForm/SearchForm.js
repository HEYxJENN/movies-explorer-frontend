import React, { useState } from "react";

import "./SearchForm.css";

import thumbsoff from "../../../images/switch.svg";
import thumbsOn from "../../../images/smalltumboff.svg";

function SearchForm(props) {
  // const [isSwitchedOn, setSwitchedOn] = useState(false);
  // const onSwitcher = () => {
  //   setSwitchedOn(!isSwitchedOn);
  // };

  return (
    <section>
      <div className="search-block">
        <form className="search-block__form" placeholder="Фильм">
          <input className="search-block__input" placeholder="Фильм" required />

          <div className="search-block__form-sign" />
          <button type="submit" className="search-block__find-button" />
        </form>
        <div className="search-block__short-switcher">
          <button
            className="search-block__switcher"
            style={{
              backgroundImage: `url(${
                props.isSwitchedOn ? thumbsOn : thumbsoff
              })`,
            }}
            onClick={props.onSwitcher}
          >
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
