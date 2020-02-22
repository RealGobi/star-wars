import React from 'react';
import './Movie.css';

export default function Movie( { movie }) {
  return (
    <div className="card">
      <div className="single-movie">
        <span id="title">{ movie.title }</span>
        <span id="release">{ movie.release_date }</span>
      </div>
    </div>
  )
}
