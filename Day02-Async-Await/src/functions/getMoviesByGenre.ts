import { movies } from '../data/movies';
import { IMovie } from '../models/IMovie';

const getMoviesByGenre = async (
  genre: string,
  numberOfFilms: number
): Promise<IMovie[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredMovies = movies.filter(
        (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
      );
      if (filteredMovies.length === 0) {
        reject(new Error('No movies found for the selected genre.'));
      } else if (numberOfFilms > filteredMovies.length) {
        resolve(filteredMovies);
      } else {
        const limitedMovies = filteredMovies.slice(0, numberOfFilms);
        resolve(limitedMovies);
      }
    }, 500);
  });
};

export default getMoviesByGenre;
