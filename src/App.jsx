import About from './About/About'
import './App.css'
import Banner from './Banner/Banner'
import Education from './Education/Education'
import Hero from './Hero/Hero'
import Navbar from './navbar/navbar'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Banner/>
      <Skills/>
      <About/>
      <Projects/>
      <Education/>
    </>
  )
}

export default App
