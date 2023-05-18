import React from "react";
import "./Register.css";

function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ email, name, password });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <section className="registration">
      <a href="/" className="registration__logo"></a>
      <h2 className="registration__header">Добро пожаловать!</h2>

      <form onSubmit={handleSubmit}>
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
              onChange={handleEmail}
              value={email}
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
              onChange={handlePassword}
              value={password}
            />
            <span className="registration__input-error"></span>
          </label>

          <label>
            <p className="registration__input-header">Name</p>
            <input
              type="name"
              name="name"
              autoComplete="name"
              //   placeholder="Password"
              className="registration__input"
              required
              minLength="2"
              maxLength="200"
              onChange={handleName}
              value={name}
            />
            <span className="registration__input-error"></span>
          </label>

          <button className="registration__confirm">Зарегистрироваться</button>

          <h3 className="registration__already">
            {" "}
            Уже зарегистрированы?{" "}
            <a href="/signin" className="registration__already_black">
              Войти
            </a>
          </h3>
        </fieldset>
      </form>
    </section>
  );
}

export default Register;
