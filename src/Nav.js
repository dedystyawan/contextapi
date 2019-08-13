import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav = () => { 

    const [movies, setMovies] = useContext(MovieContext)

     let content = (
        <> 
            <h2>List Of Movies: {movies.length}</h2>
        </>

    )
     return content 
}

export default Nav;