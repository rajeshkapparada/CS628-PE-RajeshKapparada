import './App.css';

import React, { useState } from 'react';
 
const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
 
  const movies = [
    { title: 'Fast and Furious', genre: 'Action', releaseYear: 2015 },
    { title: 'The Dark Knight', genre: 'Fantasy', releaseYear: 2004 },
    { title: 'MR. Bean', genre: 'Comedy', releaseYear: 2014 },
    { title: 'The Whale', genre: 'Drama', releaseYear: 2003 },
  ];
 
  const genres = ['All Genres', ...new Set(movies.map((movie) => movie.genre))];
 
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };
 
  const onMovieSelect = (title) => {
    alert(`You clicked on ${title}`);
  };
 
  const filteredMovies =
    selectedGenre === 'All Genres'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);
 
  return (
<div>
<h1>Movie List</h1>
<select value={selectedGenre} onChange={handleGenreChange}>
        {genres.map((genre, index) => (
<option key={index} value={genre}>
            {genre}
</option>
        ))}
</select>
<ul>
        {filteredMovies.map((movie, index) => (
 <li key={index} onClick={() => onMovieSelect(movie.title)}>
<h2>{movie.title}</h2>
<p>Genre: {movie.genre}</p>
<p>Release Year: {movie.releaseYear}</p>
</li>
        ))}
</ul>
</div>
  );
};
export default MovieList;