// Education page component
function Education() {
  return (
    <main className="education-page">
      <section className="education-section">

        <p className="section-label">MY ACADEMIC JOURNEY</p>
        <h1>Education</h1>

        <p className="education-intro">
          My educational background combines my previous studies in
          agribusiness with my current journey into software engineering
          and technology.
        </p>

        <div className="education-grid">

          {/* Centennial College */}
          <div className="education-card">
            <div className="education-year">2026 - Present</div>

            <h2>Software Engineering Technician</h2>
            <h3>Centennial College</h3>

            <div className="education-details">
              <p>
                <strong>Program:</strong> Software Engineering Technician
              </p>

              <p>
                <strong>Started:</strong> January 2026
              </p>

              <p>
                <strong>Status:</strong> Currently Studying
              </p>
            </div>

            <p>
              I am currently studying Software Engineering Technician at
              Centennial College, where I am developing skills in programming,
              web development, databases, software development, and other
              computer technologies.
            </p>

            <div className="education-skills">
              <span>Programming</span>
              <span>Web Development</span>
              <span>Databases</span>
              <span>Software Development</span>
            </div>
          </div>

          {/* Central Luzon State University */}
          <div className="education-card">
            <div className="education-year">2014 - 2017</div>

            <h2>Bachelor of Science in Agribusiness</h2>
            <h3>Central Luzon State University</h3>

            <div className="education-details">
              <p>
                <strong>Location:</strong> Philippines
              </p>

              <p>
                <strong>Started:</strong> June 2014
              </p>

              <p>
                <strong>Status:</strong> Graduated in 2017
              </p>
            </div>

            <p>
              I graduated with a Bachelor of Science in Agribusiness from
              Central Luzon State University in 2017. My education provided
              me with a strong foundation in business, sales, marketing,
              and agribusiness management.
            </p>

            <div className="education-skills">
              <span>Agribusiness</span>
              <span>Business</span>
              <span>Sales</span>
              <span>Marketing</span>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Education;