import { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Home from './components/Pages/Home'
import About from './components/About/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>
    </>
  )
}

export default App

