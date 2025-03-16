import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importing Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Posting from "./pages/Posting";

const App = () => {
  // ✅ Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      {/* ✅ Navbar with Dark Mode Toggle */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* ✅ Page Content */}
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          <Route path="/register" element={<Register isDarkMode={isDarkMode} />} />
          <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
          <Route path="/dashboard" element={<Dashboard isDarkMode={isDarkMode} />} />
          <Route path="/posting" element={<Posting isDarkMode={isDarkMode} />} /> {/* ✅ Added Posting Page */}
        </Routes>
      </div>

      {/* ✅ Footer Component */}
      <Footer isDarkMode={isDarkMode} />
    </Router>
  );
};

export default App;
