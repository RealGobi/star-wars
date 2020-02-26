import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './Components/MovieList';

function App() {

  // state with loading to true as initial state
  const [isloading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // useEffect to fetch data and set loading to false
  useEffect(() => {   
    const fetchData = async () => {
        const response = await fetch('https://swapi.co/api/films/'); 
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      }
      fetchData();
  }, [])

  // content to display

  const loading = <div className="fa-3x center"><i className="fas fa-spinner fa-pulse"></i></div>; 
  const displayMovies = <MovieList movies = {movies} />;

  // ternary operation to render loading or movies
  // in <span>; render modal
  return (
    <div className="App">
    {isloading ? loading : displayMovies}
    <span id="modal-root"></span>
    </div>
  );
}

export default App;
