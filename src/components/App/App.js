import "./App.css";

import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import ErrorPage from "../ErrorPage/ErrorPage.js";
import Main from "../Main/Main";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Profile from "../Auth/Profile/Profile";
import AllMovies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import BurgerMenu from "../Navigation/Navigation";

function App() {
  console.log("Oh, hi Mark!");

  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);
  const [isBurgerOpened, setBurgerOpened] = useState(false);
  const [isInputLocked, setInputLocked] = useState(true);

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

  return (
    <div className="body">
      <div className="page">
        <main className="content">
          <CurrentUserContext.Provider>
            <Switch>
              <Route path="/movies">
                <AllMovies onBurger={handleBurgerMenuClick} />
              </Route>

              <Route path="/profile">
                <Profile
                  onBurger={handleBurgerMenuClick}
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
                <SavedMovies onBurger={handleBurgerMenuClick} />
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
      </div>
    </div>
  );
}

export default App;
