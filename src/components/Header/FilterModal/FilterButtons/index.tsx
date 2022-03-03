import React from 'react';
import {Container, Title, ButtonsContainer} from './styles';
import Button from './Button';

const FilterButtons = () => {
  return (
    <Container>
      <Title>Tipo</Title>

      <ButtonsContainer>
        <Button text="Todos" />
        <Button text="Água" />
      </ButtonsContainer>

      <ButtonsContainer>
        <Button text="Fogo" />
        <Button text="Planta" />
      </ButtonsContainer>

      <ButtonsContainer>
        <Button text="Voador" />
        <Button text="Lutador" />
      </ButtonsContainer>

      <ButtonsContainer>
        <Button text="Veneno" />
        <Button text="Elétrico" />
      </ButtonsContainer>

      <ButtonsContainer>
        <Button text="Terra" />
        <Button text="Pedra" />
      </ButtonsContainer>

      <ButtonsContainer>
        <Button text="Gelo" />
        <Button text="Psíquico" />
      </ButtonsContainer>

      <ButtonsContainer>
        <Button text="Inseto" />
        <Button text="Fantasma" />
      </ButtonsContainer>

      <ButtonsContainer>
        <Button text="Ferro" />
        <Button text="Dragão" />
      </ButtonsContainer>

      <ButtonsContainer>
        <Button text="Sombrio" />
        <Button text="Fada" />
      </ButtonsContainer>
    </Container>
  );
};

export default FilterButtons;
