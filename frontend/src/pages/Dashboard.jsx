import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaReddit } from "react-icons/fa";

const Dashboard = ({ isDarkMode }) => {
  const [user, setUser] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState("Instagram");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("January");

  const navigate = useNavigate();

  // ✅ Fetch user data from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // ✅ Theme Styles
  const currentTheme = {
    backgroundColor: isDarkMode ? "#1E2A38" : "#F3F4F6",
    sidebarBackground: isDarkMode ? "#16202A" : "#FFFFFF",
    cardBackground: isDarkMode ? "#2C3E50" : "#FFFFFF",
    textColor: isDarkMode ? "#FFFFFF" : "#000000",
    buttonColor: isDarkMode ? "#3498DB" : "#007bff",
    hoverColor: isDarkMode ? "#3E5060" : "#EAEAEA",
    borderColor: isDarkMode ? "#4A5568" : "#E2E8F0",
  };

  // ✅ Generate Fake Social Media Data
  const generateMonthlyData = () => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months.reduce((acc, month) => {
      acc[month] = [
        { week: "Week 1", views: Math.floor(Math.random() * 5000), likes: Math.floor(Math.random() * 2000), comments: Math.floor(Math.random() * 500), followers: Math.floor(Math.random() * 10000) },
        { week: "Week 2", views: Math.floor(Math.random() * 5000), likes: Math.floor(Math.random() * 2000), comments: Math.floor(Math.random() * 500), followers: Math.floor(Math.random() * 10000) },
        { week: "Week 3", views: Math.floor(Math.random() * 5000), likes: Math.floor(Math.random() * 2000), comments: Math.floor(Math.random() * 500), followers: Math.floor(Math.random() * 10000) },
        { week: "Week 4", views: Math.floor(Math.random() * 5000), likes: Math.floor(Math.random() * 2000), comments: Math.floor(Math.random() * 500), followers: Math.floor(Math.random() * 10000) }
      ];
      return acc;
    }, {});
  };

  // ✅ Generate Years (2020-2025)
  const generateYears = () => {
    let years = {};
    for (let year = 2020; year <= 2025; year++) {
      years[year] = generateMonthlyData();
    }
    return years;
  };

  // ✅ Social Media Data with 12 Months for Each Year
  const socialMediaData = {
    Instagram: { icon: <FaInstagram color="#E1306C" size={20} />, color: "#E1306C", ...generateYears() },
    Twitter: { icon: <FaTwitter color="#1DA1F2" size={20} />, color: "#1DA1F2", ...generateYears() },
    Facebook: { icon: <FaFacebook color="#1877F2" size={20} />, color: "#1877F2", ...generateYears() },
    LinkedIn: { icon: <FaLinkedin color="#0A66C2" size={20} />, color: "#0A66C2", ...generateYears() },
    Reddit: { icon: <FaReddit color="#FF4500" size={20} />, color: "#FF4500", ...generateYears() },
  };

  // ✅ Get Available Months & Data
  const availableMonths = Object.keys(socialMediaData[selectedPlatform]?.[selectedYear] || {});
  const filteredData = socialMediaData[selectedPlatform]?.[selectedYear]?.[selectedMonth] || [];

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: currentTheme.backgroundColor }}>
      {/* ✅ Sidebar */}
      <aside
        style={{
          width: "250px",
          backgroundColor: currentTheme.sidebarBackground,
          color: currentTheme.textColor,
          padding: "2rem",
          minHeight: "100vh",
          borderRight: `2px solid ${currentTheme.borderColor}`,
        }}
      >
        <h2 className="text-center mb-4">📊 Dashboard</h2>
        <h3 className="mt-4 text-center">🔗 Connected Accounts</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Object.keys(socialMediaData).map((platform, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.7rem",
                cursor: "pointer",
                borderRadius: "8px",
                transition: "background 0.3s, transform 0.2s",
                backgroundColor: selectedPlatform === platform ? socialMediaData[platform].color : "transparent",
                transform: selectedPlatform === platform ? "scale(1.05)" : "scale(1)",
                fontWeight: selectedPlatform === platform ? "bold" : "normal",
                color: selectedPlatform === platform ? "#fff" : currentTheme.textColor,
              }}
              onClick={() => setSelectedPlatform(platform)}
            >
              {socialMediaData[platform].icon}
              <span style={{ marginLeft: "10px" }}>{platform}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* ✅ Main Content */}
      <main style={{ flex: 1, padding: "2rem", color: currentTheme.textColor }}>
        <h2>Welcome to Your Dashboard 🎉</h2>
        <h3>{socialMediaData[selectedPlatform].icon} {selectedPlatform} Performance</h3>

        {/* ✅ Year & Month Selectors */}
        <div className="d-flex gap-3 mb-3">
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="form-select" style={{ width: "150px" }}>
            {[2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="form-select" style={{ width: "150px" }}>
            {availableMonths.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        {/* ✅ Line Graph */}
        <div style={{ backgroundColor: currentTheme.cardBackground, padding: "1rem", borderRadius: "8px" }}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredData}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="views" stroke="#8884d8" />
              <Line type="monotone" dataKey="likes" stroke="#82ca9d" />
              <Line type="monotone" dataKey="comments" stroke="#ffc658" />
              <Line type="monotone" dataKey="followers" stroke="#ff6347" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* ✅ Post Button */}
        <div className="text-center mt-4">
          <button onClick={() => navigate("/posting")} className="btn" style={{ backgroundColor: currentTheme.buttonColor, color: "#FFFFFF", padding: "10px 20px", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>
            ➕ Create a New Post
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
