import React from "react";

const Home = ({ isDarkMode }) => {
  // Define the theme based on isDarkMode
  const currentTheme = {
    backgroundColor: isDarkMode ? "#578FCA" : "#D1F8EF",
    cardBackground: isDarkMode ? "#3674B5" : "#A1E3F9",
    textColor: isDarkMode ? "#FFFFFF" : "#000000",
  };

  return (
    <div
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
        minHeight: "100vh",
        padding: "2rem",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* ✅ Hero Section */}
      <div className="container py-5 d-flex align-items-center justify-content-center text-center">
        <section style={{ maxWidth: "800px" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
            SnapSync
          </h1>
          <h3 style={{ fontSize: "1.8rem", fontWeight: "500", marginBottom: "1rem" }}>
            Your Ultimate Social Media Management Tool
          </h3>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            🚀 <strong>Simplify social media management</strong> by posting images and videos across multiple platforms in just one click.
            Enhance your content with <strong>AI-powered enhancements</strong>, <strong>auto-generated captions</strong>, and <strong>intelligent hashtag suggestions</strong>.
          </p>
          <a
            href="/register"
            className="btn btn-primary px-4 py-2"
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              borderRadius: "30px",
              backgroundColor: "#007bff",
              border: "none",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Get Started 🚀
          </a>
        </section>
      </div>

      {/* ✅ Features Section */}
      <section className="container py-4">
        <h3 className="text-center mb-4">FEATURES</h3>
        <div className="row d-flex justify-content-center">
          {[
            {
              title: "AI-Powered Image Enhancement",
              features: ["Enhance images automatically.", "Choose AI-enhanced versions.", "Perfect lighting, colors, sharpness."],
            },
            {
              title: "AI-Generated Captions",
              features: ["Creative, engaging captions.", "AI adapts to trends.", "Boost social media engagement."],
            },
            {
              title: "Automatic Hashtag Suggestions",
              features: ["AI analyzes content.", "Suggests trending hashtags.", "Optimized for location & trends."],
            },
            {
              title: "AI-Based Content Moderation",
              features: ["Detect inappropriate content.", "Override AI warnings if needed.", "Maintain safe, professional posts."],
            },
          ].map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex">
              <div
                className="p-4 rounded shadow d-flex flex-column feature-box w-100"
                style={{
                  backgroundColor: currentTheme.cardBackground,
                  minHeight: "250px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <h4 className="text-center">{feature.title}</h4>
                <ul>
                  {feature.features.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
