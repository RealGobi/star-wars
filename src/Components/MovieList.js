import React from 'react';
import Movie from './Movie/Movie';

export default function MovieList( { movies } ) {
  return (
    <>
    <Movie movies = {movies} />
    </>
  )
}
