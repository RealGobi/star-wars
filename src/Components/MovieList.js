import React from 'react';
import Movie from './Movie/Movie';
import './Movie-list.css';

export default function MovieList( { movies } ) {

  // sort movies on release date and map them out in Movie component
  return (
    <div className="center">
      <div className="grid-container">
      { movies.sort((a, b) => (a.release_date > b.release_date) ? 1 : -1).map((movie, idx) => (
        <Movie
          key = {idx}
          movie = {movie}
          />
      ))}
      </div>
    </div>
  )
}
