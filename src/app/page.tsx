import react from "react"
import DiscoverEvents from "./landingPage/discoverEvents"
import Carousel from "./landingPage/carousel"
import UpCommingEvents from "./landingPage/upCommingEvents"
import Services from "./landingPage/services"
import CreateEvent from "./landingPage/createEvent"
import Testimonials from "./landingPage/testimonials"
import NewsLetter from "./defaultComponents/newsLetter"

export default function Home() {
  return (
   <div>
    <DiscoverEvents/>
    <Carousel/>
    <UpCommingEvents/>
    <Services/>
    <CreateEvent/>
    <Testimonials/>
    <NewsLetter/>
   </div>
  )
}
