import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <Link to="/" title="Перейти на главную" className="header__logo" />

      <div className="header__films">
        <Link to="/movies" className="header__films-list">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header__savedfilms-list">
          Сохраненные фильмы
        </Link>
      </div>
      <div className="header__account">
        <Link to="/profile" className="header__account-name">
          Аккаунт
        </Link>
        <Link
          to="/profile"
          title="Перейти в профиль"
          className="header__account-pic"
        />
      </div>
      <div onClick={props.onBurger} className="burger-menu" />
    </header>
  );
}

export default Header;
