import { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Home from './components/Pages/Home'
import About from './components/About/about'
import Skills from './components/Skills/skills'
import Projects from './components/Projects/projects'

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

      <section id="projects">
        <Projects />
      </section>
    </>
  )
}

export default App

