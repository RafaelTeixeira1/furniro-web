import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

import Hero from "./components/layout/hero";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <AppRoutes />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
