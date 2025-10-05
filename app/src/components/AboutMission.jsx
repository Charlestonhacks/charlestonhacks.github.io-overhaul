export function AboutMission() {
  return (
    <div className="content-page">
      <div className="content-header">
        <h1>Our Mission</h1>
      </div>

      <div className="content-body">
        <section className="mission-section">
          <p className="lead">
            CharlestonHacks is dedicated to fostering innovation, collaboration, and technical excellence
            in the Charleston tech community.
          </p>

          <h2>What We Do</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <h3>🚀 Host Hackathons</h3>
              <p>
                We organize and run hackathons that bring together developers, designers, and entrepreneurs
                to build innovative solutions to real-world problems.
              </p>
            </div>

            <div className="mission-card">
              <h3>🤝 Build Community</h3>
              <p>
                We create opportunities for tech enthusiasts to connect, collaborate, and learn from
                each other through meetups, workshops, and events.
              </p>
            </div>

            <div className="mission-card">
              <h3>📚 Educate & Inspire</h3>
              <p>
                We provide resources, mentorship, and learning opportunities to help individuals grow
                their technical skills and advance their careers.
              </p>
            </div>

            <div className="mission-card">
              <h3>💡 Drive Innovation</h3>
              <p>
                We support the development of new ideas and technologies that can make a positive
                impact on our community and beyond.
              </p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li><strong>Inclusivity:</strong> We welcome everyone, regardless of skill level or background.</li>
            <li><strong>Collaboration:</strong> We believe the best ideas come from working together.</li>
            <li><strong>Innovation:</strong> We encourage creative thinking and experimentation.</li>
            <li><strong>Community:</strong> We prioritize building lasting relationships and support networks.</li>
            <li><strong>Excellence:</strong> We strive for quality in everything we do.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
