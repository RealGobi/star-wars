import React from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

export default function Movie({ movie }) {

  const Modal = () => {
    
  }

  return (
      <div className="single-movie" onClick={() => Modal()}>
        <span id="title">{ movie.title }</span>
        <span id="release">{ movie.release_date }</span>
      </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired
}
