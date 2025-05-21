import styled from 'styled-components';
import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList, onAdd }) => {
  return (
    <ListWrapper>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onAdd={onAdd} />
      ))}
    </ListWrapper>
  );
};

export default PokemonList;


const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 32px auto;
  justify-content: flex-start;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;