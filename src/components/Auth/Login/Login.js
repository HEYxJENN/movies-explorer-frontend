import React, { useState } from "react";
import "./Login.css";

function Login(props) {
  return (
    <section className="registration">
      <a href="/" className="registration__logo"></a>
      <h2 className="registration__header">Рады видеть!</h2>
      <form>
        <fieldset className="registration__form">
          <label>
            <p className="registration__input-header">Email</p>
            <input
              type="email"
              name="email"
              autoComplete="email"
              //   placeholder="Email"
              className="registration__input "
              required
              minLength="2"
              maxLength="40"
            />
            <span className="registration__input-error"></span>
          </label>

          <label>
            <p className="registration__input-header">Password</p>

            <input
              type="password"
              name="password"
              autoComplete="current-password"
              //   placeholder="Password"
              className="registration__input"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="registration__input-error"></span>
          </label>

          <button className="registration__confirm">Войти</button>

          <h3 className="registration__already">
            {" "}
            Еще не зарегистрированы?{" "}
            <span className="registration__already_black">
              <a href="/signup">Зарегистрироваться</a>
            </span>
          </h3>
        </fieldset>
      </form>
    </section>
  );
}

export default Login;
