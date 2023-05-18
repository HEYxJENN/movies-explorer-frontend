import "./App.css";

import React from "react";

import { Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import { Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

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

  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState(false);
  const [isBurgerOpened, setBurgerOpened] = useState(false);
  const [isInputLocked, setInputLocked] = useState(true);
  const [isSwitchedOn, setSwitchedOn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  React.useEffect(() => {
    let jwt = localStorage.getItem("jwt");
    if (jwt) {
      // console.log("there is a key");
      jwt = jwt.replace(/["]/g, "");
      AuthX.checkToken(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          setTimeout(() => {
            // history.push("/saved-movies");
            // console.log(loggedIn);
          }, 3000);
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
    handleLogIn(false);
    history.push("/");
  };

  const handleSaveClick = (data) => {
    AuthX.addSavedMovie(data).then((res) => {
      savedMovies.push({ res });
    });
    console.log(savedMovies);
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

      if (jwt) {
        jwt = `Bearer ${jwt.replace(/["]/g, "")}`;
      }
      setLoggedIn(true);
      history.push("/movies");
    } catch (err) {
      console.log(err);
    }
  }

  function handleRegister({ email, name, password }) {
    AuthX.register(email, name, password)
      .then(() => {
        setTimeout(() => {
          history.push("/signin");
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
              />
            </Route>

            <Route path="/saved-movies">
              <ProtectedRoute
                loggedIn={loggedIn}
                component={SavedMovies}
                onSwitcher={onSwitcher}
                isSwitchedOn={isSwitchedOn}
                onSave={handleSaveClick}
              />
            </Route>

            <Route path="/">
              <Main />
            </Route>

            <Route path="/404">
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
