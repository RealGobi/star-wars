import React from 'react';
import Movie from './Movie/Movie';

export default function MovieList( { movies } ) {
  return (
    <>
    { movies.map((movie, idx) => (
      <Movie 
        key = {idx}
        movie = {movie} 
        />
    ))}
    </>
  )
}
