import { Navbar, Hero, Footer, Memory, Explore } from "./components"
import { hero, navlinks, memory, placesAPI } from "./data/roamifydata"

function App() {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="Explore The Beautiful World" placesAPI={placesAPI} />
      <Footer />
    </>
  )
}

export default App
