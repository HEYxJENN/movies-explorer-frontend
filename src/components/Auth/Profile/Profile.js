import "./Profile.css";
import Header from "../../Header/Header";

function Profile() {
  const user = "Евгений";
  return (
    <section>
      <Header />
      <div class="profile">
        <h2 className="profile__header">Привет, {user} ! </h2>

        <div className="profile__data">
          <p className="profile__data-field">email</p>
          <p className="profile__data-field">имя</p>
          <p className="profile__data-field">{user}</p>
          <p className="profile__data-field">email@email.com</p>
        </div>

        <h3 className="registration__already">Редактировать</h3>
        <h3 className="registration__already">Выйти из аккаунта</h3>
      </div>
    </section>
  );
}

export default Profile;
