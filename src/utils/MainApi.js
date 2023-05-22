import React from "react";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this._address = props.baseUrl;
    this._headers = props.headers;
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      this._headers.authorization = `Bearer ${jwt.replace(/["]/g, "")}`;
    }
  }

  _getRes(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  //Users

  getMe(jwt) {
    return fetch(`${this._address}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
      },
    }).then(this._getRes);
  }

  register(email, name, password) {
    return fetch(`${this._address}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    }).then(this._getRes);
  }

  login(email, password) {
    return fetch(`${this._address}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._getRes);
  }

  checkToken(jwt) {
    console.log(jwt);
    return fetch(`${this._address}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._getRes);
  }

  editUser(email, name) {
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        email,
        name,
      }),
    }).then(this._getRes);
  }

  //Movies

  getSavedMovies() {
    return fetch(`${this._address}/movies`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then(this._getRes);
  }

  addSavedMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN
  ) {
    return fetch(`${this._address}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN
      ),
    }).then(this._getRes);
  }

  removeSavedMovie(cardID) {
    return fetch(`${this._address}/movies/${cardID}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    }).then(this._getRes);
  }
}

const AuthX = new Auth({
  baseUrl: "https://api.heymovies.nomoredomains.monster",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AuthX;
