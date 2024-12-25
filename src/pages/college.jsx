import React from "react";

function College() {
  const colleges = [
    {
      id: 1,
      name: "Indian Institute of Technology, Bombay",
      location: "Mumbai, Maharashtra",
      description:
        "IIT Bombay is one of India’s premier engineering institutions, known for its cutting-edge research, innovation, and excellent placement records.",
      image: "../images/west-coast-colleges.webp",
    },
    {
      id: 2,
      name: "Indian Institute of Technology, Delhi",
      location: "New Delhi, Delhi",
      description:
        "IIT Delhi is renowned for its rigorous academic programs, world-class faculty, and state-of-the-art infrastructure.",
      image: "../images/images (5).jpg",
    },
    {
      id: 3,
      name: "Indian Institute of Science, Bangalore",
      location: "Bangalore, Karnataka",
      description:
        "IISc Bangalore specializes in advanced scientific and engineering research, offering a range of undergraduate and postgraduate programs.",
      image:
        "../images/rv-school-of-computer-science-engineering-featured-image-644.jpg ",
    },
    {
      id: 4,
      name: "All India Institute of Medical Sciences, Delhi",
      location: "New Delhi, Delhi",
      description:
        "AIIMS Delhi is a top medical college in India, known for its outstanding education, clinical research, and patient care.",
      image: "../images/about2024.webp",
    },
    {
      id: 5,
      name: "National Institute of Technology, Trichy",
      location: "Tiruchirappalli, Tamil Nadu",
      description:
        "NIT Trichy offers high-quality engineering education and is consistently ranked among the top engineering colleges in India.",
      image: "../images/Princeton-University.webp",
    },
    {
      id: 6,
      name: "University of Delhi",
      location: "New Delhi, Delhi",
      description:
        "DU is a leading university in India, offering a wide range of undergraduate and postgraduate courses in arts, science, and commerce.",
      image: "../images/List_of_Colleges_in_Delhi_University.avif ",
    },
    {
      id: 7,
      name: "Jawaharlal Nehru University",
      location: "New Delhi, Delhi",
      description:
        "JNU is recognized for its excellence in social sciences, humanities, and scientific research.",
      image: "../images/images (4).jpg",
    },
    {
      id: 8,
      name: "Indian School of Business",
      location: "Hyderabad, Telangana",
      description:
        "ISB Hyderabad is a world-class business school, offering innovative programs in management and leadership.",
      image: "../images/1600409205_colleges_in_usa.jpg",
    },
    {
      id: 9,
      name: "Symbiosis International University",
      location: "Pune, Maharashtra",
      description:
        "Symbiosis is known for its strong focus on international education and a wide array of specialized programs.",
      image: "../images/gallery-1502291891-royal-roads-university.jpg",
    },
    {
      id: 10,
      name: "Banaras Hindu University",
      location: "Varanasi, Uttar Pradesh",
      description:
        "BHU is one of the oldest and most prestigious universities in India, offering multidisciplinary education and research.",
      image: "../images/Princeton-University.webp",
    },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Top Colleges</h1>
        <p>
          Explore the best colleges in India and find the right fit for your
          career aspirations. Each institution is unique, offering specialized
          programs and opportunities.
        </p>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {colleges.map((college) => (
          <div key={college.id} className="college-list">
            <img
              src={college.image}
              alt={college.name}
              className="college-image"
            />
            <div>
              <h2>{college.name}</h2>
              <p style={{ fontWeight: "bold", color: "#555" }}>
                Location: {college.location}
              </p>
              <p>{college.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default College;
