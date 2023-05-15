import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
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
                    const poke = {'name': pokemon.forms[0].name, 'id': pokemon.id, 'image': pokemon.sprites.other.dream_world.front_default}
                    setPokemonsList( (current) => [poke, ...current])
                })
            });
        })
    }, [])
    function HandleInfo(id){
        useNavigate(`/pokes-infos/${id}`)
    }
    return(
        
        <div className='List'>
            {
                pokemonsList.map(pokemon =>{
                    return(
                        <div className='poke-card' key={pokemon.id}>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <h1>{pokemon.name}</h1>
                            <button onClick={HandleInfo}>Informações</button>
                        </div>
                    )
                })
            }
        </div>
    );
}