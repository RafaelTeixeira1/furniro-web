import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import { ProductList } from "./components/common/ProductList";
import Hero from "./components/layout/hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductList/>
      <Outlet />
    </>
  );
}

export default App;
