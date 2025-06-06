import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import { ProductList } from "./components/common/ProductList";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
