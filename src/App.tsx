import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
<<<<<<< HEAD

import Hero from "./components/layout/hero";
=======
import BrowseTheRange from "./components/common/BrowseTheRange";
>>>>>>> 6cda345286e3aa4d6387755013fd250ea5420750
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <AppRoutes />
      <BrowseTheRange />
      <Outlet />

      {/* Footer sempre no fim */}
      <Footer />
    </div>
  );
}

export default App;
