import { useRef } from 'react';
import { movies } from '../data/movies';

interface IMovieInputProps {
  selectedGenre: string;
  setSelectedGenre: React.Dispatch<React.SetStateAction<string>>;
  numberOfFilms: number;
  setNumberOfFilms: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: (genre: string, number: number) => Promise<void>;
}

const MovieInputs = ({
  selectedGenre,
  setSelectedGenre,
  numberOfFilms,
  setNumberOfFilms,
  onSubmit,
}: IMovieInputProps) => {
  const numberOfFilmsRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNumberOfFilms(
      numberOfFilmsRef.current?.value
        ? parseInt(numberOfFilmsRef.current.value)
        : 1
    );
    onSubmit(selectedGenre, numberOfFilms);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="genres">
          <button type="button" onClick={() => setSelectedGenre('action')}>
            Action
          </button>
          <button type="button" onClick={() => setSelectedGenre('comedy')}>
            Comedy
          </button>
          <button type="button" onClick={() => setSelectedGenre('drama')}>
            Drama
          </button>
          <button type="button" onClick={() => setSelectedGenre('sci-fi')}>
            Sci-Fi
          </button>
          <button type="button" onClick={() => setSelectedGenre('horror')}>
            Horror
          </button>
        </div>
        <label htmlFor="quanitityOfFilms">Number of Films in List:</label>
        <input
          type="number"
          id="quantityOfFilms"
          defaultValue={1}
          min="1"
          max={movies.length + 1}
          ref={numberOfFilmsRef}
        />
        <button type="submit">Show Movies</button>
      </form>
    </div>
  );
};

export default MovieInputs;
