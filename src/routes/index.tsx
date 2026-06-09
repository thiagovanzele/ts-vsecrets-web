import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Estoque } from "../pages/Estoque";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Estoque />} />
      </Routes>
    </BrowserRouter>
  );
};