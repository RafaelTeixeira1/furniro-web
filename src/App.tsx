import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import AppRoutes from "./router/AppRoutes";
import CartOverlay from "./components/layout/CartOverlay";
import CartSidebar from "./components/layout/CartSidebar";
import { useState } from "react";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar openCart={openCart} isCartOpen={isCartOpen} />

      {isCartOpen && <CartOverlay onClose={closeCart} />}
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />

      {/* Rotas do sistema */}
      <AppRoutes />

      {/* Outlet para rotas aninhadas, caso utilize */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
