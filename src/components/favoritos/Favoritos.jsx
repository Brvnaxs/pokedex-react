import React, { useEffect, useState } from "react";
import './favoritos.css'
import { useParams } from "react-router-dom";
export default function Favoritos(){
    const {favorites} = useParams();
    const [pokemonsList, setPokemonsList] = useState([]);
    useEffect(() => {
        favorites.forEach(id => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => res.json())
            .then(res => {
                const poke = {'name': pokemon.forms[0].name, 'id': pokemon.id, 'image': pokemon.sprites.other.dream_world.front_default}
                    setPokemonsList( (current) => [poke, ...current])
            })
        })
    }, [])

    return(
        <div className="Favoritos">
            {
                pokemonsList.map(pokemon => {
                    <div className='poke-card' key={pokemon.name}>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <h1>{pokemon.name}</h1>
                            <button className='button' onClick={()=> HandleInfo(pokemon.id)}>Informações</button>
                        </div>
                })
            }
        </div>
    )
}