import { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Home from './components/Pages/Home'
import About from './components/About/about'
import Skills from './components/Skills/skills'
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

      <section id="skills">
        <Skills />
      </section>
    </>
  )
}

export default App

