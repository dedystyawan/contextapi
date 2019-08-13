import React from 'react';


const Movie = (props) => { 

     let content = (
        <> 
            <h3>{props.name}</h3>
             <h3>{props.price}</h3>


        </>

    ) 
     return content 
}

export default Movie;