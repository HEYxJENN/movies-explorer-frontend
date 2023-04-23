import "./Profile.css";
import Header from "../../Header/Header";

function Profile(props) {
  const user = "Евгений";
  const email = "email@email.com";

  let isdisabled = props.isLocked === true ? true : false;
  console.log(isdisabled);

  return (
    <section>
      <Header />
      <div className="profile">
        <h2 className="profile__header">Привет, {user} ! </h2>

        <div className="profile__data">
          <p className="profile__data-field">email</p>
          <input
            className="profile__data-field"
            placeholder={email}
            disabled={isdisabled}
          ></input>
          <p className="profile__data-field">имя</p>
          <input
            className="profile__data-field"
            placeholder={user}
            disabled={isdisabled}
          ></input>
        </div>

        <h3 className="registration__already" onClick={props.onEdit}>
          Редактировать
        </h3>
        <h3 className="registration__already" onClick={props.onExit}>
          Выйти из аккаунта
        </h3>
      </div>
    </section>
  );
}

export default Profile;
