import React, {useState, createContext} from 'react';
import { tsPropertySignature } from '@babel/types';

export const MovieContext = createContext();


export const MovieProvider = props => { 
    const [movies, setMovies] = useState([{ name: 'Harry Potter', price: '10', id: 1 }, { name: 'Game Of Throne', price: '20', id: 2 }, { name: 'John Wick', price: '30', id: 3 }]);


     let content = (
        <> 
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </>

    )
     return content 
}