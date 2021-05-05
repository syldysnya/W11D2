import React from 'react';

const PokemonDetail = (props) => { 
  return (
    <section>
      <span>{props.pokemon.id}</span>
      <img src={props.pokemon.imageUrl}/>
      <span>{props.pokemon.name}</span>
    </section>
)}

export default PokemonDetail;