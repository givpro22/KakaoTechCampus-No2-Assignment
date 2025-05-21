import React from 'react';

const PokemonCard = ({ pokemon, onAdd }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '12px',
        borderRadius: '8px',
        textAlign: 'center',
        width: '120px',
        backgroundColor: '#fff',
      }}
    >
      <img src={pokemon.image} alt={pokemon.name} width="80" />
      <h4>{pokemon.name}</h4>
      <p>{pokemon.type} 타입</p>
      <button onClick={() => onAdd(pokemon)}>추가</button>
    </div>
  );
};

export default PokemonCard;