import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const exists = state.selected.find(p => p.id === action.payload.id);
      if (exists) {
        window.alert('이미 선택된 포켓몬입니다.');
        return;
      }
      if (state.selected.length >= 6) {
        window.alert('더 이상 선택할 수 없습니다.');
        return;
      }
      state.selected.push(action.payload);
    },
    removePokemon: (state, action) => {
      state.selected = state.selected.filter(p => p.id !== action.payload);
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;