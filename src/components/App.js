import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <div className="main">
      <div className="page">
        <Header />

        <Main
          onEditAvatar={setEditAvatarPopupOpen}
          onEditProfile={setEditProfilePopupOpen}
          onAddPlace={setAddPlacePopupOpen}
          />

        <PopupWithForm title="Обновить аватар" name="popup_edit-avatar"
                       isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} saveButton="Сохранить">
          <label className="popup__label">
            <input id="avatar-url" type="url" name="avatar" className="input input_type_avatar-image" placeholder="Ссылка на картинку" required />
            <span className="avatar-url-error popup__input-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm title="Редактировать профиль" name="popup_profile"
                       isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} saveButton="Сохранить">
        <label className="popup__label">
          <input id="fullname" name="name" type="text" className="input input_type_full-name" placeholder="Имя" minLength="2" maxLength="40" required />
          <span className="fullname-error popup__input-error"></span>
        </label>
        <label className="popup__label">
          <input id="job" type="text" name="job" className="input input_type_job" placeholder="О себе" minLength="2" maxLength="200" required />
          <span className="job-error popup__input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm title="Новое место" name="popup_new-card"
                     isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} saveButton="Создать">
        <label className="popup__label">
          <input id="placename" type="text" name="name" className="input input_type_place-name" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="placename-error popup__input-error"></span>
        </label>
        <label className="popup__label">
          <input id="image-url" type="url" name="link" className="input input_type_place-image" placeholder="Ссылка на картинку" required />
          <span className="image-url-error popup__input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="popup_delete-card" saveButton="Да"></PopupWithForm>

      <ImagePopup></ImagePopup>

      <Footer />
      </div>
    </div>
  );
}

export default App;
