import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import OurProducts from "./components/common/OurProducts";
import BrowseTheRange from "./components/common/BrowseTheRange";

function App() {
  return (
    <>
      <Navbar />
      <BrowseTheRange />
      <OurProducts />
      <Outlet />
    </>
  );
}

export default App;
