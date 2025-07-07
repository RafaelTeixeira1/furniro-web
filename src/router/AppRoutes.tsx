// src/routes/AppRoutes.tsx

import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import NotFoundPage from "../pages/NotFoundPage";
import SingleProductPage from "../pages/SingleProductPage";
import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage"; // ✅ importado

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/living" element={<ShopPage />} />
      <Route path="/shop/dining" element={<ShopPage />} />
      <Route path="/shop/bedroom" element={<ShopPage />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} /> {/* ✅ adicionada */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
