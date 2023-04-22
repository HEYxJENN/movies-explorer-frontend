import "./Navigation.css";

function BurgerMenu(props) {
  let classyName = `burger ${props.isOpened === true ? "burger_opened" : ""}`;

  return (
    <div className={classyName}>
      <div className="burger-content">
        <div className="burger-close" onClick={props.onClose} />
        <a className="burger-element">Главная</a>
        <a className="burger-element">Фильмы</a>
        <a className="burger-element">Сохраненные Фильмы</a>

        <div className="burger-account">
          <a className="header__account_name">Аккаунт</a>
          <div className="header__account_pic"></div>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
