import './modal.css';

import { useEffect, useState } from 'react';
export default function Modal() {
    const [pokemon, setPokemon] = useState()
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/15/')
            .then(res => res.json())
            .then(res => {
                    fetch(res.species.url)
                        .then(item => item.json())
                        .then(item => {
                            setPokemon({
                                'id': res.id,
                                'name': res.name,
                                'height': res.height,
                                'weight': res.weight,
                                'description': item.flavor_text_entries[7].flavor_text,
                                'habitat': item.habitat.name,
                                'type': item.genera[7].genus
                            })
                            console.log(pokemon)
                        })
            })
    }, [])
    
    return (
        <div className='Modal'>
            llllllllllll
        </div>
    )
}