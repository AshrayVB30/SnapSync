import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      style={{
        backgroundColor: isDarkMode ? "#3674B5" : "#A1E3F9",
        color: isDarkMode ? "#FFFFFF" : "#000000",
        padding: "1rem",
        textAlign: "center",
        transition: "background-color 0.3s ease",
      }}
    >
      <p>&copy; 2025 SnapSync</p>
    </footer>
  );
};

export default Footer;
