import MovieCard from "../movieCard/MovieCard";
import "./MovieList.css";
const MovieList = ({ movie, handelDelete }) => {
  return (
    <div className="movielist">
      {movie.map((movie) => (
        <MovieCard key={movie.id} movie={movie} handelDelete={handelDelete} />
      ))}
    </div>
  );
};

export default MovieList;
