import React, { useState, useEffect } from 'react';
import './App.scss';
import {Link} from 'react-router-dom'
import {IoMdArrowDropleftCircle, IoMdArrowDroprightCircle} from 'react-icons/io'



function PokemonsList() {
    const [pokemons,setPokemons] = useState([])
    const [paginacao,setPaginacao] = useState(0)
    const [listNext,setlistNext] = useState()
    const [listPrev,setlistPrev] = useState()
    useEffect(() => {      
        setPaginacao(20)  
        fetchItems("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
    }, [])
    const fetchItems = async(pag) => {      
     
      const data = await fetch(pag);
      const pokemans = await data.json()      
      setPokemons(pokemans.results)
      setlistNext(pokemans.next)
      setlistPrev(pokemans.previous)
    }

    const nextPokemons = () => {
      if( listNext != null){
        fetchItems(listNext)
      }      
    };
    const prevPokemons = () => {
      if( listPrev != null){

        fetchItems(listPrev)
      }
    };
    return (
      <div className="App">
        <h1> Pokemon List </h1>   
        {listNext}
        {listPrev}
        {pokemons.map(pokemon => (
          <div className="poke-list">
            <h2 key={pokemon.name}>{pokemon.name}</h2>
            <Link to={`/poke-list/`}>View</Link>
          </div>
        )) }
        <div>
        <IoMdArrowDropleftCircle onClick={() => prevPokemons()} />
         {paginacao}
        <IoMdArrowDroprightCircle onClick={() => nextPokemons()}/>
      </div>
      </div>
      
    );
}

export default PokemonsList;