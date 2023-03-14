import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
          <div className="popup__container">
            <h2 className="popup__header">{props.title}</h2>
            <form className={`popup__form ${props.name}`} name={props.name} noValidate>
              {props.children}
              <button type="submit" className="button popup__save-button">{props.saveButton}</button>
            </form>
            <button type="reset" aria-label="Закрыть" className="button popup__close-button" onClick={props.onClose}></button>
          </div>
        </div>
    );
}

export default PopupWithForm;
