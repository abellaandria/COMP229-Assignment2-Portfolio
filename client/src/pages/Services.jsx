// Services page component
function Services() {
  return (
    <main className="services-page">
      <section className="services-section">

        <p className="section-label">WHAT I CAN DO</p>
        <h1>My Services</h1>

        <p className="services-intro">
          I combine my developing technical skills with my professional
          experience in sales, marketing, data entry, and estimation support.
        </p>

        <div className="services-grid">

          {/* Service 1 */}
          <div className="service-card">
            <div className="service-number">01</div>
            <h2>Web Development</h2>
            <p>
              I create simple and responsive websites using HTML, CSS,
              JavaScript, and React.
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <div className="service-number">02</div>
            <h2>Programming</h2>
            <p>
              I am developing my programming skills through projects using
              Java, C#, Python, and other software development technologies.
            </p>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <div className="service-number">03</div>
            <h2>Database Development</h2>
            <p>
              I have experience creating and managing relational databases,
              tables, relationships, and queries using SQL through my
              academic projects.
            </p>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <div className="service-number">04</div>
            <h2>Sales & Marketing</h2>
            <p>
              I have professional experience in sales and marketing,
              including communicating with customers, preparing quotations,
              and supporting business and customer needs.
            </p>
          </div>

          {/* Service 5 */}
          <div className="service-card">
            <div className="service-number">05</div>
            <h2>Data Entry & Estimation Support</h2>
            <p>
              I have experience with data entry and supporting an estimation
              department in the window industry, including organizing project
              information and assisting with estimates and quotations.
            </p>
          </div>

          {/* Service 6 */}
          <div className="service-card">
            <div className="service-number">06</div>
            <h2>Digital Design</h2>
            <p>
              I enjoy creating digital content and marketing materials with
              a focus on clean and visually appealing designs.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Services;