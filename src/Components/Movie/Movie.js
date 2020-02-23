import React, { useState, useEffect } from 'react';
import Popup from "reactjs-popup";
import './Movie.css';

export default function Movie({ movie }) {

  // trigger inside model, that renders first
  const clickOnCard = () => (
    <div className="single-movie" onClick={() => Modal()}>
      <span id="title">{ movie.title }</span>
      <span id="release">{ movie.release_date }</span>
    </div>
  );

  // when clicked, content inside Popup renders
  const Modal = () => {

    const [character, setCharacter] = useState([])
      useEffect(() => {   
        movie.characters.map(char => {
          const fetchData = async () => {
            const response = await fetch(char); 
            const data = await response.json();
            return setCharacter(data);
          }
          fetchData();
      })
    }, [])
    

    console.log(character);
    
    return (
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
            <div className="character">Characters</div>
              <div className="column">
              </div>
          </div>
        </div>
      )}
    </Popup>
)};

  return (
    <Modal />
  )
}
