import { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="popup_profile"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          id="fullname"
          name="name"
          type="text"
          className="input input_type_full-name"
          placeholder="Имя"
          value={name}
          onChange={handleNameChange}
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
          value={description}
          onChange={handleDescriptionChange}
          minLength="2"
          maxLength="200"
          required
        />
        <span className="job-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
