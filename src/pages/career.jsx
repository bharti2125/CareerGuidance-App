import React from "react";

function Career() {
  const careers = [
    {
      id: 1,
      images: "/images/images (2).jpg",
      title: "Software Engineer",
      description:
        "As a Software Engineer, you will design, develop, and maintain software systems. This career involves problem-solving, coding, and working on innovative technologies to build applications and services.",
    },
    {
      id: 2,
      images: "/images/data-science-analytics-internet-and-technology-concept-concept-photo.jpg",
      title: "Data Scientist",
      description:
        "Data Scientists analyze complex data to extract actionable insights. This role requires proficiency in statistics, machine learning, and programming to interpret and present data effectively.",
    },
    {
      id: 3,
      images: "/images/investment-ecommerce-online-sale-concept-260nw-2473168075.webp",
      title: "Digital Marketing Specialist",
      description:
        "Digital Marketing Specialists create and manage online marketing campaigns. They use SEO, social media, email marketing, and content strategy to drive engagement and brand awareness.",
    },
    {
      id: 4,
      images: "/images/Professional-Graphic-Designer-Can-Enhance-Your-Business.jpeg",
      title: "Graphic Designer",
      description:
        "Graphic Designers create visual concepts to communicate ideas. They design layouts for websites, advertisements, and publications, focusing on creativity and aesthetic appeal.",
    },
    {
      id: 5,
      images: "/images/civil-engineering-branch.jpg",
      title: "Civil Engineer",
      description:
        "Civil Engineers design and oversee construction projects such as roads, bridges, and buildings. This career combines technical skills and creativity to develop infrastructure.",
    },
    {
      id: 6,
      images: "/images/medical-appointment-doctor-healthcare-40568.jpeg",
      title: "Medical Doctor",
      description:
        "Medical Doctors diagnose and treat illnesses, providing essential healthcare services. This career requires dedication to patient care and expertise in medical science.",
    },
  ];

  return (
    <div className="career-page">
      <header className="header-style">
        <h1>Explore Careers</h1>
        <p>
          Discover exciting career opportunities and find the path that suits
          you best.
        </p>
      </header>

      <div className="career-list">
        {careers.map((career) => (
          <div key={career.id} className="career-card">
            <img
             className="career-image"
             alt="career-image"
             src={career.images}
             height="250px"
             width="100%"
             />
            <h2>{career.title}</h2>
            <p className="career-description">{career.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;
