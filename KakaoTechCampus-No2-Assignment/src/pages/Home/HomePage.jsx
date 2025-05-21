import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <PokemonLogo src="/logo.png" alt="Pokemon Logo" />
      <Title>포켓몬 도감에 오신 것을 환영합니다!</Title>
      <StartButton onClick={() => navigate('/dex')}>포켓몬 도감 시작하기</StartButton>
    </HomeContainer>
  );
}
export default HomePage;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
  color: #333;
`;

const StartButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background-color: #ffcc00;
  color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #ffdb4d;
  }
`;

const PokemonLogo = styled.img`
  width: 800px;
  margin-bottom: 20px;
`;