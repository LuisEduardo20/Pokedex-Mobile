import {Text, Image} from 'react-native';
import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {getAllPokemons} from '../../store/fetchActions';

import {Container, Scroll} from './styles';

const PokemonList = () => {
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);

  return (
    <Container>
      <Scroll>
        {pokemons[0].map((pokemon, index) => (
          <>
            <Text key={index}>{pokemon.name}</Text>
          </>
        ))}
      </Scroll>
    </Container>
  );
};

export default PokemonList;
