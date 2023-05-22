import "./App.css";

import React from "react";

import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

import { Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import ProtectedRoute from "../ProtectedRoute";
import ErrorPage from "../ErrorPage/ErrorPage.js";
import Main from "../Main/Main";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Profile from "../Auth/Profile/Profile";
import AllMovies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import BurgerMenu from "../Navigation/Navigation";

import ApiX from "../../utils/MoviesApi";
import AuthX from "../../utils/MainApi.js";

function App() {
  console.log("Oh, hi Mark!");

  const history = useHistory();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("logged") === "ok" ? true : false
  );
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [isBurgerOpened, setBurgerOpened] = useState(false);
  const [isInputLocked, setInputLocked] = useState(true);
  const [isSwitchedOn, setSwitchedOn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  React.useEffect(() => {
    let jwt = localStorage.getItem("jwt");
    if (jwt) {
      jwt = jwt.replace(/["]/g, "");
      AuthX.checkToken(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          localStorage.setItem("logged", "ok");
        }
      });
    }
  }, []);

  const handleBurgerMenuClick = () => {
    setBurgerOpened(!isBurgerOpened);
  };

  const handleEditClick = () => {
    setInputLocked(!isInputLocked);
  };

  const handleExitClick = () => {
    localStorage.clear();
    setLoggedIn(false);
    history.push("/");
  };

  const handleSaveClick = (data) => {
    AuthX.addSavedMovie(data).then((res) => {
      savedMovies.push({ res });
    });
    console.log(savedMovies);
  };

  const handleDelete = (id) => {
    AuthX.removeSavedMovie(id).then((res) => {
      console.log(res);
    });
  };

  const onSwitcher = () => {
    setSwitchedOn(!isSwitchedOn);
  };

  async function handleLogIn({ email, password }) {
    try {
      const res = await AuthX.login(email, password);
      localStorage.setItem("jwt", JSON.stringify(res.token));
      setLoggedIn(true);

      let jwt = localStorage.getItem("jwt");
      console.log(jwt);

      if (jwt) {
        jwt = `Bearer ${jwt.replace(/["]/g, "")}`;
      }

      console.log(jwt);

      history.push("/movies");

      AuthX.getMe(jwt)
        .then((res) => {
          const name = res.data.name;
          const email = res.data.email;
          const data = { name: name, email: email };
          localStorage.setItem("user", data);
          setCurrentUser({ name: name, email: email });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  function handleRegister({ email, name, password }) {
    AuthX.register(email, name, password)
      .then(() => {
        setTimeout(() => {
          // history.push("/signin");
          handleLogIn({ email, password });
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleEdit = ({ name, email }) => {
    ApiX.setUser({ name, email })
      .then(ApiX.getUser())
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="body">
      {location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile" ? (
        <Header onBurger={handleBurgerMenuClick} />
      ) : (
        " "
      )}

      <main className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Switch>
            <Route path="/signin">
              <Login onSubmit={handleLogIn} />
            </Route>

            <Route path="/signup">
              <Register onSubmit={handleRegister} />
            </Route>

            <Route path="/profile">
              <ProtectedRoute
                loggedIn={loggedIn}
                component={Profile}
                onEdit={handleEditClick}
                onExit={handleExitClick}
                edit={handleEdit}
                isLocked={isInputLocked}
              />
            </Route>

            <Route path="/movies">
              <ProtectedRoute
                loggedIn={loggedIn}
                component={AllMovies}
                onSwitcher={onSwitcher}
                isSwitchedOn={isSwitchedOn}
                onSave={handleSaveClick}
                onDel={handleDelete}
              />
            </Route>

            <Route path="/saved-movies">
              <ProtectedRoute
                loggedIn={loggedIn}
                component={SavedMovies}
                onSwitcher={onSwitcher}
                isSwitchedOn={isSwitchedOn}
                onSave={handleSaveClick}
                onDel={handleDelete}
              />
            </Route>

            <Route path="/">
              <Main loggedIn={loggedIn} />
            </Route>

            <Route path="/*">
              <ErrorPage />
            </Route>
          </Switch>

          <BurgerMenu
            isOpened={isBurgerOpened}
            onClose={handleBurgerMenuClick}
          />
        </CurrentUserContext.Provider>
      </main>

      {location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile" ? (
        <Footer />
      ) : (
        " "
      )}
    </div>
  );
}

export default App;
