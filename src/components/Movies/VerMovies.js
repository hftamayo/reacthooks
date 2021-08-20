import React, { useState, useEffect, useCallback } from "react";

import MovieList from "./MovieList";
import AddMovie from './AddMovie';
import "./VerMovies.module.css";

function VerMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /*
  using useCallBack and useEffect hooks ensure that will load the data anytime 
  the component is loaded avoiding click on the fetch movies
  it won't run when it's not neccesary, so this is for app's performance 
  */

  const fetchMoviesHandler = useCallback(async() => {
    setIsLoading(true);
    setError(null); //clean all potential previous error
    //working with async we need to use try
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function addMovieHandler(movie){
    console.log(movie);
  }

  let content = <p>No movies found</p>;

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default VerMovies;
