import React from "react";



function Home() {
  const columns = [
    {
      id: 1,
      image: "/images/education.webp",
      content:
        "Enable students to identify their best-fit career with our world-class career assessment and personalised guidance.",
    },
    {
      id: 2,
       image: "/images/images (1).jpg",
      content:
        "Empower students to learn all about the professional world with virtual career simulations, exhaustive career library, career blogs and vlogs.",
    },
    {
      id: 3,
       image: "/images/images.jpg",
      content:
        "Pave student’s way to their dream college with our end-to-end college application guidance, scholarship drive and corporate internship program.",
    },
    {
      id: 4,
       image: "/images/Pros-and-Cons-of-Using-Education-Technology.png",
      content:
        "Enable schools in creating a career guidance ecosystem in sync with the vision of New Education Policy",
    },
    {
      id: 5,
       image: "/images/front-view-stacked-books-graduation-cap-ladders-education-day_23-2149241014.avif",
      content:
        "Empower educators to become International Certified Career Coaches and build a career in career guidance & counselling",
    },
    {
      id: 6,
       image: "/images/10feb-blog-2023.jpg",
      content:
        "Revolutionary assessment platform and technology driven career guidance solutions for educators to boost their career guidance & counselling practice",
    },
  ];

  return (
    <div>
      <div className="hero">
        <h1>Welcome to Career Guidance</h1>
        <p>
          Find the best colleges and courses for your career, in India or
          abroad.
        </p>
        <a href="pages/student.html" className="cta-button">
          Get Started
        </a>
        <div className="courses">
          <h6>
            Career Assessment | Personalised Guidance | Profile Building |
            Virtual Internships | <br />
            College Roadmap Planning | College Applications | Scholarship Hunt
          </h6>
        </div>
      </div>
      <div className="row" style={{ textAlign: "center", padding: "40px 30px" }}>
        <h1>Shaping the Career Guidance Landscape</h1>
        <p>Comprehensive career guidance solutions for students, parents, educators and schools</p>
      </div>
      <div className="row" style={{ textAlign: "center", padding: "40px 30px" }}>
        {columns.map((col) => (
          <div className="col-lg-4" key={col.id}>
            <img
              src={col.image}
              alt={`Column ${col.id}`}
              className="rounded-circle"
              width="100"
              height="100"
            />
            <p>{col.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
