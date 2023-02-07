import { useState } from "react";
import "./App.css";
import AddMovie from "./components/addMovie/AddMovie";
import Filter from "./components/filter/Filter";
import MovieList from "./components/movieList/MovieList";
import { moviedata } from "./Data";

function App() {
  const [movies, setMovies] = useState(moviedata);
  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);
  const handelDelete = (id) => {
    setMovies(movies.filter((el) => el.id !== id));
  };
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const ratingChanged = (rate) => {
    setRate(rate);
  };
  return (
    <div className="App">
      <Filter
        handleChange={handleChange}
        ratingChanged={ratingChanged}
        name={name}
      />

      <MovieList
        movie={movies.filter(
          (elt) =>
            elt.title
              .trim()
              .toUpperCase()
              .includes(name.trim().toUpperCase()) && elt.rate >= rate
        )}
        handelDelete={handelDelete}
      />
      <AddMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;
