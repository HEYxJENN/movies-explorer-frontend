import React from "react";
import { useFormWithValidation } from "../../../utils/validation";
import "./Login.css";

function Login(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(values);
  };

  return (
    <section className="registration">
      <a href="/" className="registration__logo"></a>
      <h2 className="registration__header">Рады видеть!</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="registration__form">
          <label>
            <p className="registration__input-header">Email</p>
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="registration__input "
              required
              minLength="2"
              maxLength="40"
              onChange={handleChange}
              value={values.email || ""}
            />
            {errors.email && (
              <span className="registration__input-error">{errors.email}</span>
            )}
          </label>

          <label>
            <p className="registration__input-header">Password</p>

            <input
              type="password"
              name="password"
              autoComplete="current-password"
              className="registration__input"
              required
              minLength="2"
              maxLength="200"
              onChange={handleChange}
              value={values.password || ""}
            />
            {errors.password && (
              <span className="registration__input-error">
                {errors.password}
              </span>
            )}
          </label>

          <button className="registration__confirm" disabled={!isValid}>
            Войти
          </button>

          <h3 className="registration__already">
            Еще не зарегистрированы?{" "}
            <a className="registration__already_black" href="/signup">
              Зарегистрироваться
            </a>
          </h3>
        </fieldset>
      </form>
    </section>
  );
}

export default Login;
