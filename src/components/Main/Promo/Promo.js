import React from "react";
import "./Promo.css";
import "../../Header/Header.css";
import Header from "../../Header/Header";

function Promo(props) {
  console.log(props.loggedIn);
  return (
    <div className="promo">
      {props.loggedIn ? (
        <Header />
      ) : (
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
      )}
      <p className="promo__caption">
        Учебный проект студента факультета Веб-разработки.
      </p>
      <div className="promo__picture" />
    </div>
  );
}

export default Promo;
