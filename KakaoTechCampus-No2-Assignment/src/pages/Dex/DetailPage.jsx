import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, removePokemon } from '../../../redux/slices/pokemonSlice';
import styled from 'styled-components';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MOCK_DATA from '../../data/mock';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selected = useSelector(state => state.pokemon.selected);

  const pokemon = MOCK_DATA.find(p => p.id.toString() === id);
  if (!pokemon) return <div>포켓몬을 찾을 수 없습니다.</div>;

  const isSelected = selected.some(p => p.id === pokemon.id);

  return (
    <DetailContainer>
      <Title>{pokemon.korean_name} 상세 정보</Title>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <TypeText>타입: {pokemon.types.join(', ')}</TypeText>
      <Description>{pokemon.description}</Description>
      <ActionButton
        onClick={() => {
          if (isSelected) {
            dispatch(removePokemon(pokemon.id));
          } else {
            dispatch(addPokemon(pokemon));
          }
        }}
      >
        {isSelected ? '삭제' : '추가'}
      </ActionButton>
      <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
    </DetailContainer>
  );
};

export default DetailPage;

const DetailContainer = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const PokemonImage = styled.img`
  width: 160px;
  margin-bottom: 12px;
`;

const TypeText = styled.p`
  font-weight: bold;
  color: #444;
  margin: 8px 0;
`;

const Description = styled.p`
  font-size: 15px;
  color: #666;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #1565c0;
  }
`;

const PokemonLogo = styled.img`
  width: 180px;
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: ${props => (props.children === '삭제' ? '#e53935' : '#4CAF50')};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 12px;
  &:hover {
    background-color: ${props => (props.children === '삭제' ? '#d32f2f' : '#45a049')};
  }
`;