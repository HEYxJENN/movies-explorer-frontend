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

      <ul className="about-student__portfolio">
        <li className="about-student__portfolio-fill">Портфолио</li>
        <li
          href="https://heyxjenn.github.io/russian-travel/#"
          className="about-student__portfolio-fill"
        >
          Статичный сайт
          <div className="arrow" />
        </li>
        <li
          href="https://github.com/HEYxJENN/how-to-learn"
          className="about-student__portfolio-fill"
        >
          Адаптивный сайт
          <div className="arrow" />
        </li>
        <li
          href="https://github.com/HEYxJENN/react-mesto-api-full-gha"
          className="about-student__portfolio-fill"
        >
          Одностраничное приложение
          <div className="arrow" />
        </li>
      </ul>
    </div>
  );
}

export default AboutStudents;
