import React, { useState, useEffect} from 'react'
import './App.css';
import Movie from './components/Movie';

// const search_URL = `http://www.omdbapi.com/?s=tt3896198&apikey=f526672c`;
const movie_API = `http://www.omdbapi.com/?i=tt3896198&apikey=f526672c`;

function App() {
  const [movies, setMovies ] = useState([]);

  useEffect(() => {
    fetch(movie_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results)
      });
  }, []);

  return (
    <div className='movie-container'>
        {movies.map((movie) =>
            <Movie key={movie.id} {...movie} />
        )}
    </div>
)
}

export default App;
