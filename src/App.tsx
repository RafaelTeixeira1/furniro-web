import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AppRoutes />
  
      <Outlet />

      {/* Footer sempre no fim */}
      <Footer />
    </div>
  );
}

export default App;
