import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/index";
import { Pokemon } from "../pages/Pokemon/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/pokemon/:name" element={<Pokemon />} />
    </Routes>
  );
};

export { AppRoutes };
