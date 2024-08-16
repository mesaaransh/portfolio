import AnimatedCursor from "react-animated-cursor"
import About from "./components/About/About"
import EdExp from "./components/Ed&Exp/EdExp"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import './index.css'

function App() {

  return (
    <main>
    <AnimatedCursor
      innerSize={0}
      outerSize={8}
      color='255, 255, 255'
      innerStyle={{opacity: '0.1'}}
      outerAlpha={1}
      innerScale={0}
      outerScale={1.5}
      trailingSpeed={4}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        ".navitem"
      ]}
    />
      <Navbar/>
      <Hero/>
      <Skills/>
      {/* <About/> */}
      <EdExp/>
      <Projects/>
    </main>
  )
}

export default App
