import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  return (
    <div className='-mt-52 relative z-20 bg-black'>

    <div className='-mt-52 relative pl-12 z-20'>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}  />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}  />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}  />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}  />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}  />
      
    </div>
      

    </div>
  )
}

export default SecondaryContainer