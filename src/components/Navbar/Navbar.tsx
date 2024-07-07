import gsap from "gsap";
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="navitem">Home</div>
        <div className="navitem">About</div>
        <div className="navitem">Education</div>
        <div className="navitem">Experience</div>
        <div className="navitem">Projects</div>
    </nav>
  )
}
