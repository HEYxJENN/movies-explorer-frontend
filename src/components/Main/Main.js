import React from "react";
import "./Main.css"; // импорт стилей для блока Main
import AboutProject from "./AboutProject/AboutProject.js";
import Promo from "./Promo/Promo.js";
import Tech from "./Tech/Tech.js";
import AboutStudent from "./AboutStudent/AboutStudent.js";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Tech />
      <AboutStudent />
      <Footer />
    </main>
  );
}

export default Main;
