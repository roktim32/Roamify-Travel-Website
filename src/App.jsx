import { Navbar, Hero, Footer, Memory } from "./components"
import { hero, navlinks, memory } from "./data/roamifydata"

function App() {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Footer />
    </>
  )
}

export default App
