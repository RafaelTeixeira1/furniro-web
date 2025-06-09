import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import { RoomInspirationSection } from "./components/common/RoomInspirationSection";
import Footer from "./components/layout/footer";
import Hero from "./components/layout/hero";
import BrowseTheRange from "./components/common/BrowseTheRange";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AppRoutes />
  
      <Outlet />
      <RoomInspirationSection />
      {/* Footer sempre no fim */}
      <Footer />
    </div>
  );
}

export default App;
