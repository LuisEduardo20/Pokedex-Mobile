import React from 'react';
import Header from '../../components/Header';
import PokemonList from '../../components/PokemonList';
import {Container} from './styles';

const Home = () => {
  return (
    <Container>
      <Header />
      <PokemonList />
    </Container>
  );
};

export default Home;
