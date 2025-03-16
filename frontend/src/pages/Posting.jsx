import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaReddit, FaMapMarkerAlt, FaTimesCircle } from "react-icons/fa";

const Posting = ({ isDarkMode }) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // ✅ Social Media Platforms with Icons & Colors
  const socialPlatforms = {
    Instagram: { icon: <FaInstagram />, color: "#c32aa3" },
    X: { icon: <FaTwitter />, color: "#1da1f2" },
    Facebook: { icon: <FaFacebook />, color: "#1877f2" },
    LinkedIn: { icon: <FaLinkedin />, color: "#0a66c2" },
    Reddit: { icon: <FaReddit />, color: "#ff4500" },
  };

  // ✅ Theme Styles
  const currentTheme = {
    backgroundColor: isDarkMode ? "#1E2A38" : "#F3F4F6",
    cardBackground: isDarkMode ? "#2C3E50" : "#FFFFFF",
    textColor: isDarkMode ? "#FFFFFF" : "#000000",
    buttonColor: isDarkMode ? "#3498DB" : "#007bff",
    errorColor: isDarkMode ? "#FF6B6B" : "#dc3545",
  };

  // ✅ Handle Platform Selection
  const togglePlatform = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]
    );
  };

  // ✅ AI Caption Generation
  const generateCaption = () => {
    if (selectedImages.length > 0) {
      return "📷 Stunning moments captured! #Photography #Memories";
    } else if (selectedVideo) {
      return "🎥 Amazing video content! #Creative #Trending";
    }
    return "";
  };

  // ✅ Handle File Upload (Max 5 Images OR 1 Video)
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const allowedImageTypes = ["image/png", "image/jpeg", "image/jpg"];
    const allowedVideoTypes = ["video/mp4", "video/mov", "video/webm"];

    let newImages = [];
    let newVideo = null;

    files.forEach((file) => {
      if (allowedImageTypes.includes(file.type)) {
        if (selectedImages.length + newImages.length < 5 && !selectedVideo) {
          newImages.push(file);
        }
      } else if (allowedVideoTypes.includes(file.type)) {
        newVideo = file;
      }
    });

    if (newVideo && (selectedVideo || selectedImages.length > 0)) {
      setErrorMessage("❌ You can upload either up to 5 images OR 1 video, not both.");
      return;
    }

    if (selectedImages.length + newImages.length > 5) {
      setErrorMessage("❌ Maximum of 5 images allowed.");
      return;
    }

    setSelectedImages([...selectedImages, ...newImages]);
    setSelectedVideo(newVideo);
    setCaption(generateCaption());
    setErrorMessage("");
  };

  // ✅ Handle Post Submission
  const handlePost = () => {
    if (selectedPlatforms.length === 0) {
      setErrorMessage("⚠️ Please select at least one social media platform.");
      return;
    }

    if (selectedImages.length === 0 && !selectedVideo) {
      setErrorMessage("⚠️ Please upload an image or video.");
      return;
    }

    console.log("✅ Posting to:", selectedPlatforms, "Images:", selectedImages, "Video:", selectedVideo, "Caption:", caption, "Location:", location);
    alert(`🎉 Your post has been shared on: ${selectedPlatforms.join(", ")}`);

    // ✅ Reset selections after posting
    setSelectedPlatforms([]);
    setSelectedImages([]);
    setSelectedVideo(null);
    setCaption("");
    setLocation("");
    setErrorMessage("");
  };

  // ✅ Remove Image from Preview
  const removeImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  // ✅ Remove Video from Preview
  const removeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div style={{ backgroundColor: currentTheme.backgroundColor, minHeight: "100vh", padding: "2rem", color: currentTheme.textColor }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: currentTheme.cardBackground, borderRadius: "16px", padding: "2rem" }}>
        <h2 className="text-center">📸 Create Your Post</h2>

        {/* Error Message */}
        {errorMessage && (
          <div style={{ color: currentTheme.errorColor, marginBottom: "10px" }}>
            <FaTimesCircle /> {errorMessage}
          </div>
        )}

        {/* Social Media Platform Selection */}
        <h4>Select Platforms:</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
          {Object.keys(socialPlatforms).map((platform) => (
            <button
              key={platform}
              style={{
                backgroundColor: selectedPlatforms.includes(platform) ? socialPlatforms[platform].color : "#ccc",
                color: "#fff",
                padding: "12px",
                borderRadius: "10px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => togglePlatform(platform)}
            >
              {socialPlatforms[platform].icon} {platform}
            </button>
          ))}
        </div>

        {/* Upload File */}
        <h4>Upload Image (Max 5) or Video (1):</h4>
        <input type="file" accept="image/*,video/*" multiple onChange={handleFileChange} className="form-control mb-3" />

        {/* Caption Input (AI Generated) */}
        <h4>Caption (AI Generated):</h4>
        <textarea value={caption} onChange={(e) => setCaption(e.target.value.slice(0, 250))} className="form-control mb-3" />

        {/* Location Input */}
        <h4>📍 Add Location (Optional):</h4>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="form-control mb-3" />

        {/* Display Uploaded Images */}
        {selectedImages.length > 0 && (
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "10px" }}>
            {selectedImages.map((image, index) => (
              <div key={index} style={{ position: "relative", display: "inline-block" }}>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "10px" }}
                />
                <button onClick={() => removeImage(index)} style={{ position: "absolute", top: "5px", right: "5px", background: "red", color: "white", borderRadius: "50%", cursor: "pointer" }}>
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Display Uploaded Video */}
        {selectedVideo && <video src={URL.createObjectURL(selectedVideo)} controls style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />}

        {/* Post Button */}
        <button className="btn w-100" style={{ backgroundColor: currentTheme.buttonColor, color: "#FFFFFF", padding: "10px", borderRadius: "5px" }} onClick={handlePost}>
          🚀 Post Now!
        </button>
      </div>
    </div>
  );
};

export default Posting;
