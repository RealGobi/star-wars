import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Toggle from '../Popup/Toggle';
import Modal from '../Popup/Modal';

import './Movie.css';
export default function Movie({ movie }) {
  
  const [character, setCharacter] = useState([])

  useEffect(() => {  
    const arr = []; 
    movie.characters.map(char => {
      const fetchData = async () => {
        const response = await fetch(char); 
        const data = await response.json();
        arr.push(data)
        setCharacter(arr);
      }
      fetchData();
    })
  }, [])

  return (
    <>
      <Toggle
        toggle={show => 
        <div className="single-movie" onClick={show}>
          <span id="title">{ movie.title }</span>
          <span id="release">{ movie.release_date }</span>
        </div>}
          content={hide => (
            <Modal movie={movie} setCharacter={setCharacter} className="modal">
            <div className="popup-content">
            <div className="pop-up-grid">
              <div className="title-in-pop-up">{ movie.title }</div>
              <span id="close" onClick={hide}>Close</span>
              <div className="character">Characters</div>
              <div className="column">
               {character.map((char, idx) => <p key={idx}>{char.name}</p>)}
          </div>
            </div>
          </div>
            </Modal>
          )}
        />
     
      </>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired
}
