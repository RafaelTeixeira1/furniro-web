import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import AppRoutes from "./router/AppRoutes";
import CartOverlay from "./components/layout/CartOverlay";
import CartSidebar from "./components/layout/CartSidebar";
import { useState } from "react";
import { Toaster } from "sonner"; // ✅ Import do Toaster

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar openCart={openCart} isCartOpen={isCartOpen} />

      {isCartOpen && <CartOverlay onClose={closeCart} />}
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />

      {/* Toaster global para exibir toast em qualquer ponto do sistema */}
      <Toaster position="top-right" richColors />

      {/* Rotas do sistema */}
      <AppRoutes />

      {/* Outlet para rotas aninhadas, caso utilize */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
