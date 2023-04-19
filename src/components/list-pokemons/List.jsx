import React, { useState, useEffect } from 'react';
import './list.css';

export default function List(){
    const [pokemonsList, setPokemonsList] = useState([]);
    useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(res => {
            setPokemonsList(res.results)
        })
    })

    return(
        <div className='List'>
            {
                pokemonsList.map(pokemon =>{
                    return(
                        <div className='poke-card' key={pokemon.name}>
                            <h1>{pokemon.name}</h1>
                            <button>Saiba mais</button>
                        </div>
                    )
                })
            }
        </div>
    );
}