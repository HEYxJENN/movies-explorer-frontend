import React from "react";

class Api extends React.Component {
  constructor(props) {
    super(props);
    this._address = props.baseUrl;
    this._headers = props.headers;
  }

  _getRes(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._address}`, {
      headers: this._headers,
    }).then(this._getRes);
  }
}

const ApiX = new Api({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiX;
