import React from 'react';

export const PokemonIndexItem = (props) => {
    return (
        <li className="pokemon-index-item">
            <span>{props.pokemon.id}</span>
            <img src={props.pokemon.imageUrl}/>
            <span>{props.pokemon.name}</span>
        </li>
    )
}