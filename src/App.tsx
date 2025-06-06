import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import { RoomInspirationSection } from "./components/common/RoomInspirationSection";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <RoomInspirationSection />
    </>
  );
}

export default App;
