import "./Navigation.css";

function BurgerMenu(props) {
  let classyName = `burger ${props.isOpened === true ? "burger_opened" : ""}`;

  return (
    <div className={classyName}>
      <div className="burger__content">
        <div className="burger__close" onClick={props.onClose} />
        <a href="/" className="burger__element">
          Главная
        </a>
        <a href="/movies" className="burger__element">
          Фильмы
        </a>
        <a href="/saved-movies" className="burger__element">
          Сохраненные Фильмы
        </a>

        <div className="burger__account">
          <a href="/profile" className="burger__account-name">
            Аккаунт
          </a>
          <div className="burger__account-pic"></div>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
