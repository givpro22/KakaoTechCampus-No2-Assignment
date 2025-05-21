import React from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokemon, onAdd }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/dex/${pokemon.id}`);
  };
  return (
    <div
      onClick={handleCardClick}
      style={{
        border: '1px solid #ddd',
        padding: '12px',
        borderRadius: '8px',
        textAlign: 'center',
        width: '120px',
        backgroundColor: '#fff',
        cursor: 'pointer',
      }}
    >
      <img src={pokemon.image} alt={pokemon.name} width="80" />
      <h4>{pokemon.name}</h4>
      <p>{pokemon.type} 타입</p>
      <button onClick={(e) => { e.stopPropagation(); onAdd(pokemon); }}>추가</button>
    </div>
  );
};

export default PokemonCard;