import "./Profile.css";
import Header from "../../Header/Header";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  console.log(currentUser);
  const [user, setUser] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  let isDisabled = props.isLocked === true ? true : false;
  console.log(isDisabled);

  const handleEditClick = () => {
    console.log("editing");
    props.onEdit({ name: user, email: email });
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section className="profile">
      <h2 className="profile__header">Привет, {user} !</h2>

      <div className="profile__data">
        <p className="profile__data-field">email</p>
        <input
          className="profile__data-field"
          placeholder={email}
          disabled={isDisabled}
          value={email}
          onChange={handleEmailChange}
        ></input>
        <p className="profile__data-field">имя</p>
        <input
          className="profile__data-field"
          placeholder={user}
          disabled={isDisabled}
          value={user}
          onChange={handleUserChange}
        ></input>
      </div>

      <h3
        className="profile__already registration__already_black"
        onClick={handleEditClick}
      >
        Редактировать
      </h3>
      <h3
        className="profile__already registration__already_exit-red "
        onClick={props.onExit}
      >
        Выйти из аккаунта
      </h3>
    </section>
  );
}

export default Profile;
