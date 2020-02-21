import React from 'react'

export default function MovieList( { movies } ) {
  return (
    <div>
      <h1>{ movies[0].title }</h1>
    </div>
  )
}
