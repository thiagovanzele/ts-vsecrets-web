import { Routes, Route } from 'react-router-dom';

import { Estoque } from '../pages/Estoque';
import { Produtos } from '../pages/Produtos';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Estoque />} />
      <Route path="/estoque" element={<Estoque />} />
      <Route path="/produtos" element={<Produtos />} />
    </Routes>
  );
};
