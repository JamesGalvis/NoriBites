import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Popular from './components/Popular/Popular'
import Trending from './components/Trending/Trending'
import Subscription from './components/Subscription'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Popular />
      <Trending />
      <Subscription />
    </div>
  )
}

export default App
