import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  // pokemon is payload from database
  pokemon
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon().then(pokemon => {
    dispatch(receiveAllPokemon(pokemon))
  });
};

// window.fetchAllPokemon = fetchAllPokemon;
// window.receiveAllPokemon = receiveAllPokemon;