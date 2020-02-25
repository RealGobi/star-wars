import React from 'react';
import PropTypes from 'prop-types';
import Toggle from '../Popup/Toggle';
import Modal from '../Popup/Modal';

import './Movie.css';
export default function Movie({ movie }) {

  return (
    <>
      <Toggle
        toggle={show => 
        <div className="single-movie" onClick={show}>
          <span id="title">{ movie.title }</span>
          <span id="release">{ movie.release_date }</span>
        </div>}
          content={hide => (
            <Modal className="modal">
            <div className="popup-content">
            <div className="pop-up-grid">
              <div className="title-in-pop-up">{ movie.title }</div>
              <span id="close" onClick={hide}>Close</span>
              <div className="character">Characters</div>
                <div className="column">
                  
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
