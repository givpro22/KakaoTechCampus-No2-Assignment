import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPokemon } from '../../../redux/slices/pokemonSlice';

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCardClick = () => {
    navigate(`/dex/${pokemon.id}`);
  };
  return (
    <CardContainer onClick={handleCardClick}>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonType>{pokemon.types.join(', ')} 타입</PokemonType>
      <AddButton
        onClick={(e) => {
          e.stopPropagation();
          dispatch(addPokemon(pokemon));
        }}
      >
        추가
      </AddButton>
    </CardContainer>
  );
};

export default PokemonCard;

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  width: 180px;
  background-color: #fff;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.12);
  }

  @media (max-width: 600px) {
    width: 120px;
  }
`;

const PokemonImage = styled.img`
  width: 100px;
`;

const PokemonName = styled.h4`
  margin: 8px 0 4px 0;
`;

const PokemonType = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const AddButton = styled.button`
  margin-top: 8px;
  padding: 6px 12px;
  font-size: 13px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;