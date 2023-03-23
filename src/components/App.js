import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
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

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards(cards.filter((c) => c._id !== card._id));
    });
  }

  function handleUpdateUser(data) {
    api.setUser(data).then((userInfo) => {
      setCurrentUser(userInfo);
      closeAllPopups();
    });
  }

  function handleUpdateAvatar(data) {
    api.editAvatar(data).then((userInfo) => {
      setCurrentUser(userInfo);
      closeAllPopups();
    });
  }

  useEffect(() => {
    Promise.all([api.getUser(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);

        setCards(
          cardsData.map((item) => ({
            _id: item._id,
            owner: item.owner,
            name: item.name,
            link: item.link,
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
            onCardDelete={handleCardDelete}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          ></EditProfilePopup>

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
