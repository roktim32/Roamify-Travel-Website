import { Navbar, Hero, Footer, Memory, Explore } from "./components"
import Advertise from "./components/Advertise"
import { hero, navlinks, memory, placesAPI, brands } from "./data/roamifydata"

function App() {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="Explore The Beautiful World" placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Footer />
    </>
  )
}

export default App
