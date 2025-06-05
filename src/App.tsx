import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import { ProductList } from "./components/common/ProductList";

function App() {
  return (
    <>
      <Navbar />
      <ProductList/>
      <Outlet />
    </>
  );
}

export default App;
