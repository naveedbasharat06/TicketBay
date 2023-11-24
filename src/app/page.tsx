import react from "react"
import DiscoverEvents from "./landingPage/discoverEvents"
import Carousel from "./landingPage/carousel"
import UpCommingEvents from "./landingPage/upCommingEvents"
import Services from "./landingPage/services"

export default function Home() {
  return (
   <div>
    <DiscoverEvents/>
    <Carousel/>
    <UpCommingEvents/>
    <Services/>
   </div>
  )
}
