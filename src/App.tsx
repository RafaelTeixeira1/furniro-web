import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import AppRoutes from "./router/AppRoutes";
import CartOverlay from "./components/layout/CartOverlay";
import CartSidebar from "./components/layout/CartSidebar";
import { useState } from "react";
import { Toaster } from "sonner"; // ✅ Toaster do Sonner para toast global

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar com controle de abertura do carrinho */}
      <Navbar openCart={openCart} isCartOpen={isCartOpen} />

      {/* Overlays de carrinho */}
      {isCartOpen && <CartOverlay onClose={closeCart} />}
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />

      {/* Toaster global para exibir notificações em qualquer ponto */}
      <Toaster position="top-right" richColors />

      {/* Rotas principais */}
      <AppRoutes />

      {/* Outlet para rotas aninhadas (se usar) */}
      <Outlet />

      {/* Footer padrão */}
      <Footer />
    </div>
  );
}

export default App;
