import portfolioImage from "../assets/project-portfolio.jpg";
import photoViewerImage from "../assets/project-photo-viewer.jpg";
import databaseImage from "../assets/project-database.jpg";

// Projects page component
function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-section">

        <p className="section-label">MY WORK</p>
        <h1>My Projects</h1>

        <p className="projects-intro">
          Here are some of the projects I have completed while developing
          my skills in web development, programming, and database management.
        </p>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">
            <img
              src={portfolioImage}
              alt="Web development and programming"
              className="project-image"
            />

            <div className="project-number">01</div>

            <h2>Personal Portfolio Website</h2>

            <p>
              I designed and developed a personal portfolio website using React
              to showcase my skills, education, services, and projects.
            </p>

            <div className="project-details">
              <p>
                <strong>Role:</strong> Web Developer and Designer
              </p>

              <p>
                <strong>Outcome:</strong> Created a responsive portfolio website
                that presents my professional and technical experience.
              </p>
            </div>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img
              src={photoViewerImage}
              alt="Photo gallery"
              className="project-image"
            />

            <div className="project-number">02</div>

            <h2>Photo Viewer Application</h2>

            <p>
              I developed an interactive photo viewer that allows users to view
              images, enlarge photos, use a slideshow, and manage favorite images.
            </p>

            <div className="project-details">
              <p>
                <strong>Role:</strong> Front-End Developer
              </p>

              <p>
                <strong>Outcome:</strong> Created an interactive web application
                using HTML, CSS, and JavaScript.
              </p>
            </div>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img
              src={databaseImage}
              alt="Database and technology"
              className="project-image"
            />

            <div className="project-number">03</div>

            <h2>Database Management Project</h2>

            <p>
              I created and managed a relational database using Oracle SQL,
              including tables, relationships, constraints, and SQL queries.
            </p>

            <div className="project-details">
              <p>
                <strong>Role:</strong> Database Developer
              </p>

              <p>
                <strong>Outcome:</strong> Developed a structured database and used
                SQL queries to retrieve and manage information.
              </p>
            </div>

            <div className="project-tech">
              <span>Oracle SQL</span>
              <span>Database</span>
              <span>SQL</span>
            </div>
          </div>

        </div>

        {/* Image Credits */}
        <div className="image-credits">
          <p>
            <strong>Image Credits:</strong> Project images are used for
            educational portfolio purposes. Image sources and photographer
            credits are acknowledged where applicable.
          </p>
        </div>

      </section>
    </main>
  );
}

export default Projects;