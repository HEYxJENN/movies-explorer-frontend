import React from "react";
import "./Footer.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__top">
        <p className="footer__top-caption">
          {" "}
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <p className="footer__separator"></p>
      </div>

      <div className="footer__bot">
        <p className="footer__logo"> &copy; {year}</p>
        <div className="footer__right">
          <p className="footer__yp">Яндекс практикум</p>
          <a href="https://github.com/HEYxJENN" className="footer__gh">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
