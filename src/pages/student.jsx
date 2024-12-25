import React from "react";

function Student() {
  const students = [
    {
      id: 1,
      images: "/images/handsome-indian-young-man-posing-260nw-2440478803.webp",
      name: "Amit Chauhan",
      course: "B.Tech in Computer Science",
      description:
        "Amit is an aspiring software engineer with a passion for coding and problem-solving. He is currently working on building web applications and enhancing his programming skills.",
    },
    {
      id: 2,
      images: "/images/f1793e26bd3372a59d97ecfe18732749.jpg",
      name: "Aadarsh Singh",
      course: "MBA in Marketing",
      description:
        "Aadarsh is a creative thinker specializing in digital marketing strategies. he is focused on building strong brands and utilizing social media to drive engagement.",
    },
    {
      id: 3,
      images: "/images/ai-generated-indian-female-student-free-photo.jpg",
      name: "Subhi Roy",
      course: "B.Sc in Biotechnology",
      description:
        "Subhi is a dedicated student exploring the intersection of biology and technology. She is passionate about research and innovative solutions for healthcare challenges.",
    },
  ];

  const benefits = [
    {
      id: 1,
      images: "/images/career-counselling-and-career-guidance.webp",
      title: "Personalized Career Guidance",
      description:
        "Students receive tailored career advice based on their interests, skills, and aspirations, helping them make informed decisions about their future.",
    },
    {
      id: 2,
      images: "/images/placement-officer-or-placement-cell.jpg",
      title: "Placement Opportunities",
      description:
        "Access to top-notch placement assistance programs, including resume building, interview preparation, and connections with leading companies.",
    },
    {
      id: 3,
      images: "/images/training-and-skill-development-concept-with-icons-of-online-course-conference-seminar-webinar-e-learning-coaching-grow-knowledge-and-abilities-2H6NW56.jpg",
      title: "Skill Development",
      description:
        "Workshops and training sessions to help students build essential skills required in today's job market, such as communication, problem-solving, and technical expertise.",
    },
    {
      id: 4,
      images: "/images/images (3).jpg",
      title: "Job Market Insights",
      description:
        "Stay updated with the latest trends in the job market and learn about high-demand careers and industries.",
    },
    {
      id: 5,
      images: "/images/Scholarship-1536x864-1.webp ",
      title: "Scholarship Guidance",
      description:
        "Information about scholarships and financial aid programs to help students pursue their education without financial constraints.",
    },
  ];

  return (
    <div>
      <div className="student-page">
        <header>
          <h1>Meet Our Students</h1>
          <p>
            Learn about our talented students, their aspirations, and the
            courses they are pursuing.
          </p>
        </header>

        <div className="student-list">
          {students.map((student) => (
            <div key={student.id} className="student-card">
              <img 
              className="student-image"
              alt="student-image"
              src={student.images}
              height="250px"
              width="80%"
               />
              <h2>{student.name}</h2>
              <h4>{student.course}</h4>
              <p>{student.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="student-page" style={{ padding: "20px" }}>
        <header style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1>Career Guidance Benefits</h1>
          <p>
            Discover how our Career Guidance Program can help students achieve
            their dreams by providing the right support and opportunities.
          </p>
        </header>

        <div
          className="benefits-list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <img 
              className="benefit-image"
              alt="benefit-image"
              src={benefit.images}
              height="200px"
              width="80%"
               />
              <h2>{benefit.title}</h2>
              <p style={{ color: "#555", fontSize: "14px" }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <section style={{ marginTop: "40px", textAlign: "center" }}>
          <h2>Helping Students Choose Their Path</h2>
          <p>
            With our Career Guidance Program, students gain access to resources,
            tools, and mentors that help them discover their true potential and
            choose a career path that aligns with their goals and passions.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Student;
