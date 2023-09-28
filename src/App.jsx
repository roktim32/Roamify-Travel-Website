import { Navbar, Hero, Footer } from "./components"
import { hero, navlinks } from "./data/roamifydata"

function App() {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Footer />
    </>
  )
}

export default App
