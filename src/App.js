import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './Components/MovieList';

function App() {
  const [isloading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {   
    const fetchData = async () => {
        const response = await fetch('https://swapi.co/api/films/'); 
        const data = await response.json();
        setMovies(data.results);
        setloading(false);
      }
      fetchData();
  }, [])
  console.log(movies);

  const loading = <div>Loading...</div>;
  const displayMovies = <MovieList movies = {movies} />;

  return (
    <div className="App">
    {isloading ? loading : displayMovies}
    </div>
  );
}

export default App;
