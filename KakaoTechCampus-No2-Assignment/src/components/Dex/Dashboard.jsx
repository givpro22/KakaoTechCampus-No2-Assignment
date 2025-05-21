import styled from 'styled-components';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePokemon } from '../../../redux/slices/pokemonSlice';

const Dashboard = () => {
  const selected = useSelector((state) => state.pokemon.selected);
  const dispatch = useDispatch();

  return (
    <DashboardContainer>
      <Title>선택된 포켓몬</Title>
      <SelectedList>
        {selected.map((pokemon) => (
          <SelectedCard key={pokemon.id}>
            <img src={pokemon.image} alt={pokemon.name} width="120" />
            <p>{pokemon.name}</p>
            <RemoveButton onClick={() => dispatch(removePokemon(pokemon.id))}>삭제</RemoveButton>
          </SelectedCard>
        ))}
      </SelectedList>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  padding: 16px;
  background-color: #f8f8f8;
  border-radius: 10px;
  margin: 20px auto;
  max-width: 900px;
`;

const SelectedList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
  justify-items: center;
`;

const SelectedCard = styled.div`
  border: 1px solid #ccc;
  padding: 8px;
  background-color: #fff;
  border-radius: 6px;
  text-align: center;
`;

const RemoveButton = styled.button`
  margin-top: 6px;
  padding: 4px 10px;
  font-size: 12px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c0392b;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 16px;
`;
