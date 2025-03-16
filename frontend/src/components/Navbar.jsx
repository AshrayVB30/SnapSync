import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: isDarkMode ? "#3674B5" : "#A1E3F9",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: isDarkMode ? "#FFF" : "#000",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        SnapSync
      </Link>

      {/* Hamburger Menu */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: isDarkMode ? "#FFF" : "#000",
            fontSize: "1.8rem",
            cursor: "pointer",
            marginRight: "1rem",
          }}
        >
          ☰
        </button>

        {isMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "3rem",
              right: "1rem",
              backgroundColor: isDarkMode ? "#2B5E99" : "#BEE6F9",
              color: isDarkMode ? "#FFF" : "#000",
              borderRadius: "8px",
              padding: "1rem",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              minWidth: "150px",
              zIndex: 10,
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              {[
                { name: "Home", link: "/" },
                { name: "About", link: "/about" },
                { name: "Login", link: "/login" },
                { name: "Register", link: "/register" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem", textAlign: "center" }}>
                  <Link
                    to={item.link}
                    style={{
                      color: isDarkMode ? "#FFF" : "#000",
                      textDecoration: "none",
                      display: "block",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Theme Toggle Button */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: isDarkMode ? "#FFF" : "#000",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
