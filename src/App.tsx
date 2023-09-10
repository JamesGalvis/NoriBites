import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Popular from './components/Popular/Popular'
import Trending from './components/Trending/Trending'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Popular />
      <Trending />
    </div>
  )
}

export default App
