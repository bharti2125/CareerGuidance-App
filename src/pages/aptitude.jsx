import React from "react";

function Aptitude() {
  const testFeatures = [
    {
      id: 1,
      title: "Comprehensive Skill Assessment",
      description:
        "Analyze your strengths, weaknesses, and aptitude in various areas such as logical reasoning, numerical ability, and verbal skills.",
    },
    {
      id: 2,
      title: "Customized Test Modules",
      description:
        "Tailored test modules based on career preferences and goals, providing insights into the best career options for students.",
    },
    {
      id: 3,
      title: "Real-Time Results",
      description:
        "Get instant feedback and detailed reports to understand your performance and areas for improvement.",
    },
    {
      id: 4,
      title: "Career Recommendations",
      description:
        "Receive career recommendations based on your test results, aligning with your skills and interests.",
    },
    {
      id: 5,
      title: "Practice Tests",
      description:
        "Access a library of practice tests to prepare for real-world exams and interviews.",
    },
  ];

  return (
    <div className="aptitude-test-page">
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Aptitude Test</h1>
        <p>
          Unlock your potential with our comprehensive aptitude tests designed
          to guide you towards a successful career.
        </p>
      </header>

      <div className="test-features">
        {testFeatures.map((feature) => (
          <div key={feature.id} className="feature-card">
            <h2>{feature.title}</h2>
            <p style={{ fontSize: "14px" }}>{feature.description}</p>
          </div>
        ))}
      </div>

      <section style={{ marginTop: "40px", textAlign: "center" }}>
        <h2 className="sec-h2">Why Take an Aptitude Test?</h2>
        <p style={{ color: "hsl(278, 80.20%, 33.70%)" }}>
          Our aptitude tests provide valuable insights into your abilities and
          help you make informed career decisions. Whether you're planning to
          choose a stream, a college major, or a profession, our tests are
          tailored to your needs.
        </p>
        <button className="apt-button">Start Your Test</button>
      </section>
    </div>
  );
}

export default Aptitude;
