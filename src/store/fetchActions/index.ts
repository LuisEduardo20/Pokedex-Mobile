import {loadPokemons} from '../ducks/pokemons';

export const getAllPokemons = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000';

  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(res => dispatch(loadPokemons(res.results)))
      .catch(error => console.log(error));
  };
};
