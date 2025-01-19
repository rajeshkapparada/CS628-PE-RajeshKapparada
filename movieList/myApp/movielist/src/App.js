import React from 'react';
import './App.css';
import MovieList from './MovieList';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Welcome to the Movie List App</h1>
      </header>
      <main>
        <MovieList />
      </main>
      <footer>
        <p>Enjoy browsing through your favorite movies!</p>
      </footer>
    </div>
  );
};

export default App;