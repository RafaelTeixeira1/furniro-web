
import Hero from "../components/layout/hero";
import { RoomInspirationSection } from "../components/common/RoomInspirationSection";
import BrowseTheRange from "../components/common/BrowseTheRange";


const HomePage = () => {
    return(
      <main>
        <Hero />  
        <BrowseTheRange />
        <RoomInspirationSection />
      </main>
    )
}

export default HomePage;