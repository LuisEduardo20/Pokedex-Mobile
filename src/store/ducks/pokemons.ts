import {createAction, createReducer} from '@reduxjs/toolkit';

const INITIAL_STATE: unknown[] = [];

export const filterPokemonByName = createAction('FILTER_BY_NAME');
export const loadPokemons = createAction('LOAD_POKEMONS');

export default createReducer(INITIAL_STATE, {
  [filterPokemonByName.type]: (state, action) => [...state, action.payload],
  [loadPokemons.type]: (state, action) => [action.payload],
});
