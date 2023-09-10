import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Popular from './components/Popular/Popular'
import Trending from './components/Trending/Trending'
import Subscription from './components/Subscription'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Popular />
      <Trending />
      <Subscription />
      <Footer />
    </div>
  )
}

export default App
