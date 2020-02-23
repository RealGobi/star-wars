import React from 'react';
import Popup from "reactjs-popup";
import './Movie.css';

export default function Movie( { movie }) {
console.log(movie);

  // trigger inside model, that renders first
  const clickOnCard = () => (
    <div className="single-movie" onClick={() => Modal()}>
      <span id="title">{ movie.title }</span>
      <span id="release">{ movie.release_date }</span>
    </div>
  );

  // when clicked, content inside Popup renders
  const Modal = () => (
    <Popup
      trigger={clickOnCard()}
      modal
      closeOnDocumentClick
    >
      {close => (
        <div className="popup-content">
          <div className="pop-up-grid">
            <div className="title-in-pop-up">{ movie.title }</div>
            <span id="close" onClick={close}>Close</span>
            <div className="character">Character</div>
              <div className="column">
                { movie.characters.map((episod, idx) => (
                  <p key={idx}>{episod}</p>
                )) }
              </div>
          </div>
        </div>
      )}
    </Popup>
  );


  return (
    <Modal />
  )
}
