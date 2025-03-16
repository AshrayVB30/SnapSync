import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#578FCA" : "#D1F8EF",
        color: isDarkMode ? "#FFFFFF" : "#000000",
        minHeight: "100vh",
        padding: "2rem",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* ✅ About Header */}
      <h1 className="text-center mb-4">About SnapSync</h1>
      <p className="text-center" style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
        SnapSync is an innovative platform that allows users to post images and videos across multiple social media platforms with a single click.
      </p>

      {/* ✅ Our Story Section */}
      <section className="mt-5 text-center">
        <h2 className="mb-3">Our Story</h2>
        <p style={{ maxWidth: "800px", margin: "0 auto" }}>
          SnapSync was founded in 2025 by a team of passionate individuals who wanted to make social media management easier and more efficient. 
          Our mission is to provide a unified platform for users to share their content across multiple social media platforms with a single click.
        </p>
        <p style={{ maxWidth: "800px", margin: "0 auto" }}>
          We started with a small team and a big vision. Our team is made up of experts in software development, marketing, and design. 
          We are dedicated to providing the best possible experience for our users.
        </p>
      </section>

      {/* ✅ Meet Our Team Section */}
<section className="mt-5 text-center">
  <h2 className="mb-3">Meet Our Team</h2>
  <div className="row justify-content-center">
    {[
      { name: "Ashray V B", role: "Front-End Developer", img: "https://picsum.photos/200/200", linkedin: "https://www.linkedin.com/in/ashrayvb/" },
      { name: "Shraddha S N", role: "UI/UX Designer", img: "https://picsum.photos/200/201", linkedin: "https://www.linkedin.com/in/shruddha-s-n-426671264/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_connections%3BxYKDgA9cQQWEHLdI7KZ%2FRg%3D%3D" },
      { name: "Haider Sagar Warsi", role: "Back-End Developer", img: "https://picsum.photos/200/202", linkedin: "https://www.linkedin.com/in/hsw7?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD_2jz8BRiRh554Kr8BcdD-la0hc-mdV8ic&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BZAjA%2F96YSty%2BUrH1I3Yomg%3D%3D" },
    ].map((member, index) => (
      <div key={index} className="col-md-3 text-center mb-4">
        <img
          src={member.img}
          alt={member.name}
          style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "10px" }}
        />
        <h4>
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {member.name}
          </a>
        </h4>
        <p>{member.role}</p>
      </div>
    ))}
  </div>
</section>


      {/* ✅ Our Mission Section */}
      <section className="mt-5 text-center">
        <h2 className="mb-3">Our Mission</h2>
        <p style={{ maxWidth: "800px", margin: "0 auto" }}>
          Our mission is to provide a unified platform for users to share their content across multiple social media platforms with a single click.
          We strive to make social media management easier and more efficient for our users.
        </p>
      </section>
{/* ✅ Contact Us Section */}
<section className="mt-5 text-center">
  <h2 className="mb-3">Contact Us</h2>
  <p>
    Email:{" "}
    <a 
      href="mailto:snapsync@gmail.com" 
      style={{ color: isDarkMode ? "#A1E3F9" : "#007bff", textDecoration: "none", fontWeight: "bold" }}
    >
      snapsync@gmail.com
    </a>
  </p>
  <p>Phone: +91 12345-67890</p>
  <p>Address: Bengaluru, Karnataka, India</p>
  <div className="d-flex justify-content-center mt-3">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9003650873224!2d77.56291927491729!3d12.914124887395971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157c30872cfb%3A0xe47e49b96e0ff9ba!2sSapthagiri%20Elegance!5e0!3m2!1sen!2sin!4v1740232005612!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: "0", borderRadius: "10px" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>
    </div>
  );
};

export default About;
