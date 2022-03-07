import {configureStore} from '@reduxjs/toolkit';

import rootPokemons from './ducks/pokemons';

export default configureStore({
  reducer: {
    pokemons: rootPokemons,
  },
});
