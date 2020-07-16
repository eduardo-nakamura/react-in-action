import React, { useState, useEffect } from 'react';
import './App.scss';
import {Link} from 'react-router-dom'
import {IoMdArrowDropleftCircle, IoMdArrowDroprightCircle} from 'react-icons/io'



function PokemonsDetail() {
    const [pokemon,setPokemon] = useState({})

    useEffect(() => {      

    }, [])
 

   
    return (
      <div className="App">
        <h1> Pokemon  </h1>   
      
      </div>
      
    );
}

export default PokemonsDetail;