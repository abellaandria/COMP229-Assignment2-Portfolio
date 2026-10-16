// About Me page component
function About() {
  return (
    <main className="about-page">
      <section className="about-section">

        <p className="section-label">GET TO KNOW ME</p>
        <h1>About Me</h1>

        <div className="about-content">

          <div className="about-text">
            <h2>My Journey</h2>

            <p>
              Hi! I'm Andria Abella, currently studying Software Engineering
              Technician at Centennial College. I started my program in
              January 2026 as I began building a new career path in technology.
            </p>

            <p>
              Before entering the technology field, I earned my Bachelor of
              Science in Agribusiness from Central Luzon State University in
              the Philippines. I studied there from June 2014 and graduated
              in 2017.
            </p>

            <p>
              I also have professional experience in sales, marketing,
              data entry, and estimation support in the window industry.
              Through this experience, I developed communication,
              organization, customer service, and problem-solving skills.
            </p>

            <p>
              Today, I am combining my previous business experience with my
              growing technical knowledge in programming, web development,
              databases, and software development. I enjoy learning new
              technologies, designing digital content, and creating projects
              that allow me to develop both my creative and technical skills.
            </p>
            <a
              href="/Andria_Abella_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              View My Resume
            </a>
          </div>

          <div className="skills-card">
            <h2>Skills & Experience</h2>

            <h3>Technical Skills</h3>
            <ul>
              <li>HTML, CSS & JavaScript</li>
              <li>React</li>
              <li>Java</li>
              <li>C#</li>
              <li>Python</li>
              <li>SQL & Database Development</li>
            </ul>

            <h3>Professional Skills</h3>
            <ul>
              <li>Sales & Marketing</li>
              <li>Customer Communication</li>
              <li>Data Entry</li>
              <li>Estimation Support</li>
              <li>Organization & Time Management</li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}

export default About;