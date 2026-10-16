import profileImage from "../assets/profile.jpg";
import { Link, useLocation } from "react-router-dom";

// Home page component
function Home() {
  const location = useLocation();

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">

          {/* Thank-you message after contact form submission */}
          {location.state?.message && (
            <div className="success-message">
              <strong>Thank You!</strong>
              <p>{location.state.message}</p>
            </div>
          )}

          <p className="hero-intro">Hello, I'm</p>

          <h1>Andria Abella</h1>

          <h2>Software Engineering Technician Student</h2>

          <p className="hero-description">
            I am a Software Engineering Technician student with a professional
            background in sales, marketing, data entry, and estimation support.
            I enjoy working with computers, designing, and creating digital
            projects while continuously developing my skills in technology.
          </p>

          <p className="mission-statement">
            <strong>My Mission:</strong> To combine my business experience and
            growing technical skills to create practical, user-friendly, and
            meaningful digital solutions.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="primary-button">
              View My Projects
            </Link>

            <Link to="/contact" className="secondary-button">
              Contact Me
            </Link>
          </div>

        </div>

        {/* Profile Photo */}
        <div className="hero-image">
          <img
            src={profileImage}
            alt="Andria Abella"
            className="profile-image"
          />
        </div>

      </section>
    </main>
  );
}

export default Home;