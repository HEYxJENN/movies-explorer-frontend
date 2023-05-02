import "./Navigation.css";

function BurgerMenu(props) {
  let classyName = `burger ${props.isOpened === true ? "burger_opened" : ""}`;

  return (
    <div className={classyName}>
      <div className="burger__content">
        <div className="burger__close" onClick={props.onClose} />
        <a className="burger__element">Главная</a>
        <a className="burger__element">Фильмы</a>
        <a className="burger__element">Сохраненные Фильмы</a>

        <div className="burger__account">
          <a className="header__account-name">Аккаунт</a>
          <div className="header__account-pic"></div>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
