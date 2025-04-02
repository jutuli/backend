import { IMovie } from '../models/IMovie';
interface IMovieDisplayProps {
  genre: string;
  movies: IMovie[];
}

const MovieDisplay = ({ genre, movies }: IMovieDisplayProps) => {
  return (
    <section className="movie-display">
      <h2>The below movies are from the genre: {genre}</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default MovieDisplay;
