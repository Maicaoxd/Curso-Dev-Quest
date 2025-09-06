import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { CartProducts } from "./cart-products";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/cart-products" element={<CartProducts />} />
    </Routes>
  );
};

export { AppRoutes };
