// Navigation bar component
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {/* Custom portfolio logo */}
      <div>
        <Link to="/">AA</Link>
      </div>

      {/* Navigation links */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </nav>
  );
}

export default Navbar;