import React from 'react';
import api from '../utils/api';

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    Promise.all([
      api.getUser(),
      api.getInitialCards()
    ])
      .then((result) => {
        const userData = result[0];
        const cardsData = result[1];
        console.log(userData);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);

        // cardList = new Section({
        //   items: cardsData,
        //   renderer: (element) => {
        //     cardList.addItem(generateCard(element), false);
        //   }
        // }, places);
        // cardList.renderItems();
      })
      .catch((err) => {
        console.log(err);
      })
  })

  const avatarStyle = {
    backgroundImage: `url(${userAvatar})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img className="profile__avatar" src="#" style={avatarStyle} />
          <div className="profile__overlay">
            <a className="profile__edit-avatar" href="#" onClick={props.onEditAvatar}></a>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-edit">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" aria-label="Редактировать" className="button profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button type="button" aria-label="Добавить" className="button profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="places">
        <template id="card-template">
          <article className="places__card">
            <div className="button places__delete-button"> </div>
            <img className="button places__image" />
            <div className="places__item">
              <h2 className="places__name"></h2>
              <div className="places__like-item">
                <button type="button" aria-label="Добавить в избранное" className="button places__like-button"></button>
                <div className="places__like-counter"></div>
              </div>
            </div>
          </article>
        </template>
      </section>
    </main>
  );
}

export default Main;
