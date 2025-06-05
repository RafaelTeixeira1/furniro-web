import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from './components/layout/footer';


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

    </>
  );
}

export default App;
