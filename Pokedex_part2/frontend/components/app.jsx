import { Route } from 'react-router-dom';
import React from 'react';
import PokemonIndexContainer from "./pokemon/pokemon_index_container";

const App = () => {
    return (
        <Route path='/' component={PokemonIndexContainer} />
    )
}

export default App;