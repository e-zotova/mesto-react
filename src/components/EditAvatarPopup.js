import { useRef, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = currentUser.avatar;
  }, [currentUser]);

  function handleAvatarChange() {
    return avatarRef.current.value;
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="popup_edit-avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          id="avatar-url"
          type="url"
          name="avatar"
          ref={avatarRef}
          onChange={handleAvatarChange}
          className="input input_type_avatar-image"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="avatar-url-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
