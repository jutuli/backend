import { useState } from 'react';
import './App.css';
import Jogging from './components/Jogging';
import MovieDisplay from './components/MovieDisplay';
import MovieInputs from './components/MovieInputs';
import { IMovie } from './models/IMovie';
import getMoviesByGenre from './functions/getMoviesByGenre';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string>('action');
  const [numberOfFilms, setNumberOfFilms] = useState<number>(1);
  const [movieList, setMovieList] = useState<IMovie[]>([]);

  const handleSubmit = async (genre: string, number: number) => {
    try {
      const result = await getMoviesByGenre(genre, number);
      setMovieList(result);
    } catch (error) {
      console.error(error);
      setMovieList([]);
    }
  };

  return (
    <>
      <Jogging />
      <MovieInputs
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        numberOfFilms={numberOfFilms}
        setNumberOfFilms={setNumberOfFilms}
        onSubmit={handleSubmit}
      />
      <MovieDisplay genre={selectedGenre} movies={movieList} />
    </>
  );
}

export default App;
