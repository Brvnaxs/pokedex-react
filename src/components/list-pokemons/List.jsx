import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdFavoriteBorder } from "react-icons/md";
import './list.css';

export default function List({funcFav}){
    const navigate = useNavigate()
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
        navigate(`/pokes-infos/${id}`)
    }
    
    return(
        
        <div className='List'>
            {
                pokemonsList.map(pokemon =>{
                    return(
                        <div className='poke-card' key={pokemon.name}>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <div className='name-fav'>
                            <h1>{pokemon.name}</h1>
                            <button className='favorites' onClick={()=> funcFav(pokemon.id)}>
                                <MdFavoriteBorder className='icone'/>
                            </button>
                            </div>
                            <button className='button' onClick={()=> HandleInfo(pokemon.id)}>Informações</button>
                        </div>
                    )
                })
            }
        </div>
    );
}