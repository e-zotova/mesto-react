import React from 'react';

function Card(card) {
  function handleClick() {
    card.onCardClick(card);
  }

    return (
      <article className="places__card">
        <div className="button places__delete-button"> </div>
        <img className="button places__image" onClick={handleClick} style={{ backgroundImage: `url(${card.src})` }}/>
        <div className="places__item">
          <h2 className="places__name">{card.name}</h2>
          <div className="places__like-item">
            <button type="button" aria-label="Добавить в избранное" className="button places__like-button"></button>
            <div className="places__like-counter">{card.likesCount}</div>
          </div>
        </div>
      </article>
    );
}

export default Card;
