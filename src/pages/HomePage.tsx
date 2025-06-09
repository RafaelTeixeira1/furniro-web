
import Hero from "../components/layout/hero";
import { RoomInspirationSection } from "../components/common/RoomInspirationSection";
import BrowseTheRange from "../components/common/BrowseTheRange";
import OurProducts from "../components/common/OurProducts";
import FurniroFurniture from "../components/common/FurniroFurniture";
FurniroFurniture
OurProducts


const HomePage = () => {
    return(
      <main>
        <Hero />  
        <BrowseTheRange />
        <OurProducts />
        <RoomInspirationSection />
        <FurniroFurniture />
      </main>
    )
}

export default HomePage;