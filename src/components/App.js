import headerLogo from '../images/header-logo.svg';

function App() {
  return (
    <div className="main">
      <div className="page">
        <header className="header">
          <img className="header__logo" src={headerLogo} alt="Логотип Место Россия" />
        </header>
        <main className="content">
          <div className="popup popup_profile">
            <div className="popup__container">
              <h2 className="popup__header">Редактировать профиль</h2>
              <form className="popup__form popup__profile-form" name="edit-profile" noValidate>
                <label className="popup__label">
                  <input id="fullname" name="name" type="text" className="input input_type_full-name" placeholder="Имя" minLength="2" maxLength="40" required />
                  <span className="fullname-error popup__input-error"></span>
                </label>
                <label className="popup__label">
                  <input id="job" type="text" name="job" className="input input_type_job" placeholder="О себе" minLength="2" maxLength="200" required />
                  <span className="job-error popup__input-error"></span>
                </label>
                <button type="submit" className="button popup__save-button">Сохранить</button>
              </form>
              <button type="reset" aria-label="Закрыть" className="button popup__close-button"></button>
            </div>
          </div>
          <div className="popup popup_new-card">
            <div className="popup__container">
              <h2 className="popup__header">Новое место</h2>
              <form className="popup__form popup__new-card-form" name="new-card" noValidate>
                <label className="popup__label">
                  <input id="placename" type="text" name="name" className="input input_type_place-name" placeholder="Название" minLength="2" maxLength="30" required />
                  <span className="placename-error popup__input-error"></span>
                </label>
                <label className="popup__label">
                  <input id="image-url" type="url" name="link" className="input input_type_place-image" placeholder="Ссылка на картинку" required />
                  <span className="image-url-error popup__input-error"></span>
                </label>
                <button type="submit" className="button popup__save-button">Создать</button>
              </form>
              <button type="reset" aria-label="Закрыть" className="button popup__close-button"></button>
            </div>
          </div>
          <div className="popup popup_image-view">
            <div className="popup__image-container">
              <figure className="popup__figure">
                <img className="popup__big-image" src="#" alt="" />
                <figcaption className="popup__caption"></figcaption>
              </figure>
              <button type="reset" aria-label="Закрыть" className="button popup__close-button"></button>
            </div>
          </div>
          <div className="popup popup_delete-card">
            <div className="popup__container">
              <h2 className="popup__header">Вы уверены?</h2>
                <form className="popup__form popup__delete-card-form" name="delete-card" noValidate>
                  <button className="button popup__save-button">Да</button>
                </form>
              <button type="reset" aria-label="Закрыть" className="button popup__close-button"></button>
            </div>
          </div>
          <div className="popup popup_edit-avatar">
            <div className="popup__container">
              <h2 className="popup__header">Обновить аватар</h2>
              <form className="popup__form popup__edit-avatar-form" name="edit-avatar" noValidate>
                <label className="popup__label">
                  <input id="avatar-url" type="url" name="avatar" className="input input_type_avatar-image" placeholder="Ссылка на картинку" required />
                  <span className="avatar-url-error popup__input-error"></span>
                </label>
                <button className="button popup__save-button">Сохранить</button>
              </form>
              <button type="reset" aria-label="Закрыть" className="button popup__close-button"></button>
            </div>
          </div>
          <section className="profile">
            <div className="profile__container">
              <img className="profile__avatar" src="#" alt="Фото профиля." />
              <div className="profile__overlay">
                <a className="profile__edit-avatar" href="#"></a>
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__name-edit">
                <h1 className="profile__name"></h1>
                <button type="button" aria-label="Редактировать" className="button profile__edit-button"></button>
              </div>
              <p className="profile__job"></p>
            </div>
           <button type="button" aria-label="Добавить" className="button profile__add-button"></button>
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
        <footer className="footer">
          <p className="footer__copyright">&#169; 2023 Mesto Russia</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
