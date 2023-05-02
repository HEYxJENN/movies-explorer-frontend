import React from "react";
import "./ErrorPage.css";

function ErrorPage(props) {
  return (
    <section className="error-page">
      <div className="error-page__info">
        <h2 className="error-page__not-found">404</h2>
        <p className="error-page__not-found-under">Страница не найдена</p>
      </div>
      <button type="button" className="error-page__back">
        <a className="error-page__back" href="/">
          Назад
        </a>
      </button>
    </section>
  );
}

export default ErrorPage;
