import React from "react";
import "./Tech.css";

function Tech() {
  return (
    <div className="tech">
      <h2 className="tech__title">Технологии</h2>

      <div className="tech__middle_block">
        <h3 className="tech__middle_block-header">7 технологий</h3>
        <p className="tech__middle_block-text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>

      <div className="tech__list">
        <p className="tech__list-item">HTML</p>
        <p className="tech__list-item">CSS</p>
        <p className="tech__list-item">JS</p>
        <p className="tech__list-item">React</p>
        <p className="tech__list-item">Git</p>
        <p className="tech__list-item">Express.js</p>
        <p className="tech__list-item">mongoDB</p>
      </div>
    </div>
  );
}

export default Tech;
