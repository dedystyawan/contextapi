import React, {useState, useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext'

const MovieList = () => { 
    const [movies, setMovies] = useContext(MovieContext);
    let content = (
    <> 
        {movies.map(movie => (
            <Movie key={movie.id} name={movie.name} price={movie.price} />
        ))}
    </>
    )
    
     return content 
}

export default MovieList;