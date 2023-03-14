import React from 'react';

function ImagePopup(props) {
  console.log(props);
    return (
      <div className={`popup popup_image-view ${props.card.name? 'popup_opened' : ''}`}>
          <div className="popup__image-container">
            <figure className="popup__figure">
              <img className="popup__big-image" src={props.card.src} alt={props.card.name} />
              <figcaption className="popup__caption">{props.card.name}</figcaption>
            </figure>
            <button type="reset" aria-label="Закрыть" className="button popup__close-button" onClick={props.onClose}></button>
          </div>
        </div>
    );
}

export default ImagePopup;
