import React from 'react'
import '../App.css';

const IMG_API = `http://img.omdbapi.com/?apikey=[f526672c]&`

const Movie = ({title, poster_path, overview, vote_avarage}) =>
  <div className="movie">
    <img src={IMG_API + poster_path} alt={title}></img>
    <div className='movie-info'>
        <h3>{title}</h3>
        <span>{vote_avarage}</span>
    </div>

  </div>

export default Movie