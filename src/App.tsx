import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
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
