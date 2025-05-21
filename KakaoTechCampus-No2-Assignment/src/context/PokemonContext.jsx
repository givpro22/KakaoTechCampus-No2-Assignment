import React, { createContext, useContext, useState } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);

  const addPokemon = (pokemon) => {
    if (selected.find((p) => p.id === pokemon.id)) {
      alert('이미 선택된 포켓몬입니다.');
      return;
    }
    if (selected.length >= 6) {
      alert('더 이상 선택할 수 없습니다.');
      return;
    }
    setSelected((prev) => [...prev, pokemon]);
  };

  const removePokemon = (id) => {
    setSelected((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <PokemonContext.Provider value={{ selected, addPokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);