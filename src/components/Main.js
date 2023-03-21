import { useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main(props) {
  const [cards, setCards] = useState([]);

  const user = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img className="profile__avatar" src={user.avatar} alt="" />
          <div className="profile__overlay">
            <a
              className="profile__edit-avatar"
              href="/#"
              onClick={props.onEditAvatar}
            >
              {" "}
            </a>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-edit">
            <h1 className="profile__name">{user.name}</h1>
            <button
              type="button"
              aria-label="Редактировать"
              className="button profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{user.about}</p>
        </div>
        <button
          type="button"
          aria-label="Добавить"
          className="button profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="places">
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            src={card.src}
            likesCount={card.likesCount}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
