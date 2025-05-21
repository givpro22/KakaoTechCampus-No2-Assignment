import React from 'react';
import Dashboard from '../../components/Dex/Dashboard';
import PokemonList from '../../components/Dex/PokemonList';
import styled from 'styled-components';

const DexPage = () => {
  return (
      <PageWrapper>
        <Dashboard />
        <PokemonList/>
      </PageWrapper>
  );
};

export default DexPage;

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;