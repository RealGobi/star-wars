import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isloading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);

  const loading = (<div>Loading...</div>)
  const displayMovies = (<div>movies...</div>)

  return (
    <div className="App">
    {isloading ? loading : displayMovies}
    </div>
  );
}

export default App;
