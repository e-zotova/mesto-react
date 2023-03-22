import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const [currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.likeCard(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  useEffect(() => {
    Promise.all([api.getUser(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);

        setCards(
          cardsData.map((item) => ({
            id: item._id,
            owner: item.owner,
            name: item.name,
            src: item.link,
            likes: item.likes,
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setIsImageOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="main">
        <div className="page">
          <Header />

          <Main
            onEditAvatar={setEditAvatarPopupOpen}
            onEditProfile={setEditProfilePopupOpen}
            onAddPlace={setAddPlacePopupOpen}
            cards={cards}
            onCardClick={{ setSelectedCard, setIsImageOpen }}
            onCardLike={handleCardLike}
          />

          <PopupWithForm
            title="Обновить аватар"
            name="popup_edit-avatar"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <label className="popup__label">
              <input
                id="avatar-url"
                type="url"
                name="avatar"
                className="input input_type_avatar-image"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="avatar-url-error popup__input-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm
            title="Редактировать профиль"
            name="popup_profile"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <label className="popup__label">
              <input
                id="fullname"
                name="name"
                type="text"
                className="input input_type_full-name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="fullname-error popup__input-error"></span>
            </label>
            <label className="popup__label">
              <input
                id="job"
                type="text"
                name="job"
                className="input input_type_job"
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="job-error popup__input-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm
            title="Новое место"
            name="popup_new-card"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            saveButton="Создать"
          >
            <label className="popup__label">
              <input
                id="placename"
                type="text"
                name="name"
                className="input input_type_place-name"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="placename-error popup__input-error"></span>
            </label>
            <label className="popup__label">
              <input
                id="image-url"
                type="url"
                name="link"
                className="input input_type_place-image"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="image-url-error popup__input-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm
            title="Вы уверены?"
            name="popup_delete-card"
            saveButton="Да"
          ></PopupWithForm>

          <ImagePopup
            card={selectedCard}
            isOpen={isImageOpen}
            onClose={closeAllPopups}
          ></ImagePopup>

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
