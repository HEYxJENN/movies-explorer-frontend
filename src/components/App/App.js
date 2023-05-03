import "./App.css";

import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
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

function App() {
  console.log("Oh, hi Mark!");

  const history = useHistory();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [isBurgerOpened, setBurgerOpened] = useState(false);
  const [isInputLocked, setInputLocked] = useState(true);
  const [isSwitchedOn, setSwitchedOn] = useState(false);

  const handleBurgerMenuClick = () => {
    setBurgerOpened(!isBurgerOpened);
    console.log(isBurgerOpened);
  };

  const handleEditClick = () => {
    setInputLocked(!isInputLocked);
    console.log(isInputLocked);
  };

  const handleExitClick = () => {
    localStorage.clear();
    history.push("/signin");
  };

  const onSwitcher = () => {
    setSwitchedOn(!isSwitchedOn);
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
        <CurrentUserContext.Provider>
          <Switch>
            <Route path="/movies">
              <AllMovies onSwitcher={onSwitcher} isSwitchedOn={isSwitchedOn} />
            </Route>

            <Route path="/profile">
              <Profile
                onEdit={handleEditClick}
                onExit={handleExitClick}
                isLocked={isInputLocked}
              />
            </Route>

            <Route path="/signin">
              <Login />
            </Route>

            <Route path="/signup">
              <Register />
            </Route>

            <Route path="/saved-movies">
              {/* {loggedIn ? <Redirect to="/" /> : <Redirect to="/reg" />} */}
              <SavedMovies
                onSwitcher={onSwitcher}
                isSwitchedOn={isSwitchedOn}
              />
            </Route>

            <Route path="/404">
              <ErrorPage />
            </Route>

            <Route path="/">
              <Main />
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
