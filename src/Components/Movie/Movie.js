import React, {useState} from 'react';
import Popup from "reactjs-popup";
import './Movie.css';

export default function Movie({ movie }) {

  // state with loading to true as initial state
  const [characters, setCharacters] = useState([]);

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
            <div className="character">Characters</div>
              <div className="column">
                { movie.characters.map((characterUrl) => {
                  const fetchData = async () => {
                    const response = await fetch(characterUrl); 
                    const data = await response.json();
                      setCharacters(data);
                  }
                  fetchData();
                })}

              </div>
          </div>
        </div>
      )}
    </Popup>
  );
  console.log(characters.name);

  return (
    <Modal />
  )
}
