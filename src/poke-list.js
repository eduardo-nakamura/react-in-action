import React, { useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import {IoMdArrowDropleftCircle, IoMdArrowDroprightCircle} from 'react-icons/io'



function PokemonsList() {
    const [pokemons,setPokemons] = useState([])
    const [paginacao,setPaginacao] = useState()

    useEffect(() => {
        setPaginacao(0)
        fetchItems(paginacao)
    }, [])
    const fetchItems = async(pag) => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${pag}&limit=20`);
      const pokemans = await data.json()    
    
      setPokemons(pokemans.results)
    }

    const nextPokemons = () => {

     console.log(paginacao)
    };
    const prevPokemons = () => {
     
    };
    return (
      <div className="App">
        <h1> Pokemon List </h1>   
        {paginacao}
        {pokemons.map(pokemon => (
          <div className="poke-list">
            <h2 key={pokemon.name}>{pokemon.name}</h2>
            <Link to={pokemon.url}>View</Link>
          </div>
        )) }
        <div>
        <IoMdArrowDropleftCircle onClick={() => prevPokemons()} />
        <IoMdArrowDroprightCircle onClick={() => nextPokemons()}/>
      </div>
      </div>
      
    );
}

export default PokemonsList;