import React, {useState, useEffect} from 'react';
import Popup from "reactjs-popup";
import './Movie.css';

export default function Movie({ movie, charUrl }) {
console.log(charUrl);

  // trigger inside model, that renders first
  const clickOnCard = () => (
    <div className="single-movie" onClick={() => Modal()}>
      <span id="title">{ movie.title }</span>
      <span id="release">{ movie.release_date }</span>
    </div>
  );

  // when clicked, content inside Popup renders
  const Modal = () => {

      // state with loading to true as initial state
  const [char, setChar] = useState([]);

  // useEffect to fetch data and set loading to false
  const data = () => {   
    charUrl.map(char => {
      fetch(char)
      .then((response) => {
        return response.json()
      }).then((json) => {
        setChar(json);
        console.log('this->', json);
      })
  })
  };
  
    return (
  <Popup
    trigger={clickOnCard()}
    modal
    closeOnDocumentClick
    onClick={() => data()}
  >
    {close => (
      <div className="popup-content">
        <div className="pop-up-grid">
          <div className="title-in-pop-up">{ movie.title }</div>
          <span id="close" onClick={close}>Close</span>
          <div className="character">Characters</div>
            <div className="column">
            {char.map((c, idx) => {
             return <span key={idx}>{c.name}</span>
            })}
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
