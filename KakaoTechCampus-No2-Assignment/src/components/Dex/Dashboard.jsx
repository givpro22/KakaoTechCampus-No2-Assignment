import React from 'react';

const Dashboard = ({ selected, onRemove }) => {
  return (
    <div style={{ padding: '16px', backgroundColor: '#f0f0f0' }}>
      <h2>선택된 포켓몬</h2>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {selected.map((pokemon) => (
          <div key={pokemon.id} style={{ border: '1px solid #ccc', padding: '8px' }}>
            <img src={pokemon.image} alt={pokemon.name} width="80" />
            <p>{pokemon.name}</p>
            <button onClick={() => onRemove(pokemon.id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
