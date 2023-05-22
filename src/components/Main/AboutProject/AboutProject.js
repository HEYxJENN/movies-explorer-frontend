import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="about-project">
      <h2 className="about-project__title">О проекте</h2>

      <div className="about-project__middle">
        <div className="about-project__middle-block">
          <h3 className="about-project__middle-block-header">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__middle-block-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__middle-block">
          <h3 className="about-project__middle-block-header">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__middle-block-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about-project__weekstodo">
        <p className="about-project__weekstodo-fill about-project__weekstodo-fill_black">
          1 неделя
        </p>
        <p className="about-project__weekstodo-fill about-project__weekstodo-fill_gray">
          4 недели
        </p>
        <p className="about-project__weekstodo-fill">Back-end</p>
        <p className="about-project__weekstodo-fill">Front-end</p>
      </div>
    </div>
  );
}

export default AboutProject;
