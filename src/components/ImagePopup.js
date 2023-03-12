import React from 'react';

function ImagePopup() {
    return (
      <div className="popup popup_image-view">
          <div className="popup__image-container">
            <figure className="popup__figure">
              <img className="popup__big-image" src="#" alt="" />
              <figcaption className="popup__caption"></figcaption>
            </figure>
            <button type="reset" aria-label="Закрыть" className="button popup__close-button"></button>
          </div>
        </div>
    );
}

export default ImagePopup;
