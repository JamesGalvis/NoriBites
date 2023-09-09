import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Popular from './components/Popular/Popular'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Popular />
    </div>
  )
}

export default App
