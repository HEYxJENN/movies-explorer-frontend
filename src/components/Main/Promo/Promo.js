import React from "react";
import "./Promo.css";

function Promo() {
  return (
    <div className="promo">
      <div className="promo__top">
        <div className="promo__logo" />

        <div className="promo__enterblock">
          <button className="promo__reg">
            <a className="promo__reg_visited" href="/signup">
              Регистрация
            </a>
          </button>
          <button className="promo__enter">
            <a className="promo__enter_visited" href="/signin">
              Войти
            </a>
          </button>
        </div>
      </div>
      <p className="promo__caption">
        Учебный проект студента факультета Веб-разработки.
      </p>
      <div className="promo__picture" />
    </div>
  );
}

export default Promo;
