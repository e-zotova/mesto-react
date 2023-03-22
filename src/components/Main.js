import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img className="profile__avatar" src={currentUser.avatar} alt="" />
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
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              aria-label="Редактировать"
              className="button profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          type="button"
          aria-label="Добавить"
          className="button profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="places">
        {props.cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            owner={card.owner}
            src={card.src}
            likes={card.likes}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
