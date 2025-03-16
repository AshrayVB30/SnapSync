import React, { useState } from "react";

const Login = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      setErrorMessage("❌ Please enter a valid email address.");
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage("🔑 Password must be at least 6 characters long.");
      return;
    }

    console.log("✅ Login Successful:", formData);
    setErrorMessage("🎉 Login Successful! Redirecting...");

    // Simulate a redirect after successful login
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
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
      {/* ✅ Login Form */}
      <div
        className="login-form p-4 rounded shadow"
        style={{
          backgroundColor: currentTheme.cardBackground,
          color: currentTheme.textColor,
          width: "400px",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center mb-3">🔐 LOGIN</h2>

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
            { label: "E-mail", type: "email", name: "email", emoji: "📧" },
            { label: "Password", type: "password", name: "password", emoji: "🔑" },
          ].map((field, index) => (
            <div className="form-group text-start mt-3" key={index}>
              <label htmlFor={field.name}>
                {field.emoji} {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                className="form-control"
                required
                value={formData[field.name] || ""}
                onChange={handleChange}
                style={{
                  border: `1px solid ${currentTheme.inputBorder}`,
                  backgroundColor: currentTheme.cardBackground,
                  color: currentTheme.textColor,
                }}
              />
            </div>
          ))}

          <div className="form-group text-start mt-3">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe" className="ms-2">
              🔄 Remember me
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
            Login 🚀
          </button>
        </form>

        {/* ✅ Don't have an account? Link to Register Page */}
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <a
            href="/register"
            style={{
              color: isDarkMode ? "#A1E3F9" : "#007bff",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Register Here 📝
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
