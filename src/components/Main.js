import { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUser(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);

        setCards(
          cardsData.map((item) => ({
            id: item._id,
            name: item.name,
            src: item.link,
            likesCount: item.likes.length,
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img className="profile__avatar" src={userAvatar} alt="" />
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
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              aria-label="Редактировать"
              className="button profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{userDescription}</p>
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
