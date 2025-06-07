import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import { RoomInspirationSection } from "./components/common/RoomInspirationSection";
import Footer from "./components/layout/footer";
import { ProductList } from "./components/common/ProductList";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Outlet />
      <RoomInspirationSection />
      <Footer />

    </>
  );
}

export default App;
