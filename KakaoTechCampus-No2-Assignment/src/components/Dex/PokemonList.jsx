import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList, onAdd }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '20px' }}>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default PokemonList;
