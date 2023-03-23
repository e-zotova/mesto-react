import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [placeName, setPlaceName] = useState("");
  const [placeImage, setPlaceImage] = useState("");

  function handlePlaceNameChange(e) {
    setPlaceName(e.target.value);
  }

  function handlePlaceImageChange(e) {
    setPlaceImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: placeName,
      link: placeImage,
    });
  }

  useEffect(() => {
    setPlaceName("");
    setPlaceImage("");
  }, [props.onClose]);

  return (
    <PopupWithForm
      title="Новое место"
      name="popup_new-card"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      saveButton="Создать"
    >
      <label className="popup__label">
        <input
          id="placename"
          type="text"
          name="name"
          value={placeName}
          onChange={handlePlaceNameChange}
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
          value={placeImage}
          onChange={handlePlaceImageChange}
          className="input input_type_place-image"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="image-url-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
