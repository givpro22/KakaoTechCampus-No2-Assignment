import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>포켓몬 상세 정보 (ID: {id})</h2>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default DetailPage;