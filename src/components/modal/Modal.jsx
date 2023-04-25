import './modal.css';

import { useEffect, useState } from 'react';
export default function Modal() {
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/15/')
            .then(res => res.json())
            .then(res => {
                    fetch(res.species.url)
                        .then(item => item.json())
                        .then(item => {
                            setPokemon({
                                'id': res.id,
                                'name': res?.name,
                                'height': res.height,
                                'image': res.sprites.other.dream_world.front_default, 
                                'weight': res.weight,
                                'description': item.flavor_text_entries[7].flavor_text,
                                'habitat': item.habitat.name,
                                'type': item.genera[7].genus
                            })
                        })
            })
    }, [])
    
    if (!pokemon) {
        return <h1>Loading</h1>
    }

    return (
        <div className='Modal' key={pokemon.id}>
            <img src={pokemon.image} alt={pokemon.name}  />
            <div className='modal-infos'>
            <h1>{pokemon.name}</h1>
            <h2>{pokemon.description}</h2>
            <div className='modal-buttons'> 
                <p>Hábitat: {pokemon.habitat}</p>
                <p>Tipo: {pokemon.type}</p>
                <p>Altura: {pokemon.height} m</p>
                <p>Peso: {pokemon.weight} kg</p>
                </div>
            </div>
        </div>
    )
}