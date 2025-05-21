import styled from 'styled-components';
import React from 'react';
import PokemonCard from './PokemonCard';
import MOCK_DATA from '../../data/MOCK_DATA';

const PokemonList = () => {
  return (
    <ListWrapper>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
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