import React from "react";
import "./AboutStudents.css";

function AboutStudents() {
  return (
    <div className="about-student">
      <h2 className="about-student__title">Студент</h2>

      <div className="about-student__middle">
        <div className="about-student__middle-block">
          <h3 className="about-student__middle-block-header">Евгений</h3>
          <p className="about-student__middle-block-text">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-student__middle-block-text">
            Из Спб, сейчас живу в Тбилиси. Окончил СПбГЭУ (ФинЭк). Раньше
            работал в сфере недвижимости, но понял, что давно думал о разработке
            и пора этим заняться! И еще текст, чтобы хватило на третью строчку.
          </p>
          <p className="about-student__github">GitHub</p>
        </div>

        <div
          src="../../../images/myPht.jpg"
          alt="my avatar"
          className="about-student__photo"
        />
      </div>

      <div className="about-student__portfolio">
        <p className="about-student__portfolio-fill">Портфолио</p>
        <p className="about-student__portfolio-fill">Статичный сайт</p>
        <p className="about-student__portfolio-fill">Адаптивный сайт</p>
        <a
          href="https://github.com/HEYxJENN/react-mesto-api-full-gha"
          className="about-student__portfolio-fill"
        >
          Одностраничное приложение
        </a>
      </div>
    </div>
  );
}

export default AboutStudents;
