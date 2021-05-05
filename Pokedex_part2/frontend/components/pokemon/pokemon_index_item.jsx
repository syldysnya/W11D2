import React from 'react';
import { Link } from 'react-router-dom';
import PokemonDetail from './pokemon_detail';

export const PokemonIndexItem = (props) => {
    debugger
    return (
        <li className="pokemon-index-item">
            <Link to="pokemon/:pokemonId">
                <PokemonDetail key={props.pokemon.id} pokemon={props.pokemon}/>
            </Link>
        </li>
    )
}