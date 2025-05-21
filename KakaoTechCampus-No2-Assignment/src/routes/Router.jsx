import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import DexPage from '../pages/Dex/DexPage';
import DetailPage from '../pages/Dex/DetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dex" element={<DexPage />} />
        <Route path="/dex/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;