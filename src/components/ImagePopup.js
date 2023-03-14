import React from 'react';

function ImagePopup({card, onClose}) {
    return (
      <div className={`popup popup_image-view ${card.name ? 'popup_opened' : ''}`}>
          <div className="popup__image-container">
            <figure className="popup__figure">
              <img className="popup__big-image" src={card.src} alt={card.name} />
              <figcaption className="popup__caption">{card.name}</figcaption>
            </figure>
            <button type="reset" aria-label="Закрыть" className="button popup__close-button" onClick={onClose}></button>
          </div>
        </div>
    );
}

export default ImagePopup;
