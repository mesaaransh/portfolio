import './App.css'
import About from './About/About'
import Banner from './Banner/Banner'
import Education from './Education/Education'
import Hero from './Hero/Hero'
import Navbar from './Navbar/Navbar'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UC from './UC'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UC />} />
          <Route path="/home" element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}

function Main() {

  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Skills />
      <About />
      <Projects />
      <Education />
      <Banner />
    </>
  )

}

export default App
