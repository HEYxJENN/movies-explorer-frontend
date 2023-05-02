import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <a href="/" title="Перейти на главную" className="header__logo" />

      <div className="header__films">
        <a href="/movies" className="header__films-list">
          Фильмы
        </a>
        <a href="/saved-movies" className="header__savedfilms-list">
          Сохраненные фильмы
        </a>
      </div>
      <div className="header__account">
        <a href="/profile" className="header__account-name">
          Аккаунт
        </a>
        <a
          href="/profile"
          title="Перейти в профиль"
          className="header__account-pic"
        />
      </div>
      <div onClick={props.onBurger} className="burger-menu" />
    </header>
  );
}

export default Header;
