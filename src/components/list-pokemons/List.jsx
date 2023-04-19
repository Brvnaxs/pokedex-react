import React, { useState, useEffect } from 'react';
import './list.css';

export default function List(){
    const [pokemonsList, setPokemonsList] = useState([]);
    useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(res => {
            res.results.forEach(({name, url}) => {
                fetch(url)
                .then(res => res.json())
                .then(pokemon => {
                    const poke = {'name': pokemon.forms[0].name,'image': pokemon.sprites.other.dream_world.front_default}
                    setPokemonsList( (current) => [poke, ...current])
                    console.log(poke)
                })
            });
        })
    }, [])

    return(
        <div className='List'>
            {
                pokemonsList.map(pokemon =>{
                    return(
                        <div className='poke-card' key={pokemon.name}>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <h1>{pokemon.name}</h1>
                            <button>Informações</button>
                        </div>
                    )
                })
            }
        </div>
    );
}