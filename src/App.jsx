import { Navbar, Hero, Footer } from "./components"
import { hero } from "./data/roamifydata"

function App() {


  return (
    <>
      <Navbar />
      <Hero hero={hero} />
      <Footer />
    </>
  )
}

export default App
