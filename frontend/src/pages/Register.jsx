import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("❌ Passwords do not match.");
      return;
    }
    if (!formData.terms) {
      setErrorMessage("⚠️ Please agree to the terms and conditions.");
      return;
    }

    console.log("✅ Form data submitted:", formData);
    setErrorMessage("🎉 Registration Successful! Welcome to SnapSync!");
  };

  // Theme colors
  const currentTheme = {
    backgroundColor: isDarkMode ? "#578FCA" : "#D1F8EF",
    cardBackground: isDarkMode ? "#3674B5" : "#A1E3F9",
    textColor: isDarkMode ? "#FFFFFF" : "#000000",
    inputBorder: isDarkMode ? "#ccc" : "#555",
    buttonColor: isDarkMode ? "#004085" : "#007bff",
  };

  return (
    <div
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* ✅ Registration Form */}
      <div
        className="register-form p-4 rounded shadow"
        style={{
          backgroundColor: currentTheme.cardBackground,
          color: currentTheme.textColor,
          width: "500px",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center mb-3">📝 REGISTER</h2>

        {errorMessage && (
          <p
            className={`text-center ${
              errorMessage.includes("🎉") ? "text-success" : "text-danger"
            }`}
          >
            {errorMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} className="text-center">
          {[
            { label: "First Name", type: "text", key: "firstName", emoji: "👤" },
            { label: "Last Name", type: "text", key: "lastName", emoji: "🧑" },
            { label: "E-mail", type: "email", key: "email", emoji: "📧" },
            { label: "Password", type: "password", key: "password", emoji: "🔒" },
            { label: "Confirm Password", type: "password", key: "confirmPassword", emoji: "🔑" },
          ].map((field, index) => (
            <div className="form-group text-start mt-3" key={index}>
              <label htmlFor={field.key}>
                {field.emoji} {field.label}
              </label>
              <input
                type={field.type}
                id={field.key}
                name={field.key}
                className="form-control"
                required
                style={{
                  border: `1px solid ${currentTheme.inputBorder}`,
                  backgroundColor: currentTheme.cardBackground,
                  color: currentTheme.textColor,
                }}
                value={formData[field.key]}
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="form-group text-start mt-3">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            <label htmlFor="terms" className="ms-2">
              ✅ I agree to the terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="btn w-100 mt-3"
            style={{
              backgroundColor: currentTheme.buttonColor,
              color: "#FFFFFF",
              padding: "10px",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Register Now! 🚀
          </button>
        </form>

        {/* ✅ Already have an account? Link to Login Page */}
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: isDarkMode ? "#A1E3F9" : "#007bff",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Login Here 🔑
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
