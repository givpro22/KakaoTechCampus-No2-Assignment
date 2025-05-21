import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MOCK_DATA from '../../data/MOCK_DATA.js';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pokemon = MOCK_DATA.find(p => p.id.toString() === id);
  if (!pokemon) return <div>포켓몬을 찾을 수 없습니다.</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{pokemon.name} 상세 정보</h2>
      <img src={pokemon.image} alt={pokemon.name} width="160" />
      <p>타입: {pokemon.type}</p>
      <p>{pokemon.description}</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default DetailPage;