import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Outlet />
    </>
  );
}

export default App;
