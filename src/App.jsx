import { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Home from './components/Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
