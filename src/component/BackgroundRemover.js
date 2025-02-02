import React, { useState } from "react";

const BackgroundRemover = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImageUrl(null);
    }
  };

  // Send image to Flask backend for background removal
  const removeBackground = async () => {
    if (!selectedFile) {
      alert("Please select an image first!");
      return;
    }
    setLoading(true);
    setProgress(10);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = async () => {
      // Remove header from data URL
      const base64Image = reader.result.split(",")[1];

      try {
        const response = await fetch("http://127.0.0.1:5000/remove-background", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: base64Image }),
        });
        setProgress(70);
        const data = await response.json();
        if (data.image) {
          setImageUrl(`data:image/png;base64,${data.image}`);
          setProgress(100);
        } else {
          alert("Error: " + data.error);
        }
      } catch (error) {
        console.error("Error removing background:", error);
        alert("Error removing background: " + error.message);
      } finally {
        setLoading(false);
      }
    };
  };

  return (
    <div className="container">
      <h2>Image Background Remover</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {selectedFile && (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt="Input"
          width="200px"
          style={{ marginTop: "10px" }}
        />
      )}
      <button onClick={removeBackground} disabled={loading} style={{ marginTop: "10px" }}>
        {loading ? "Processing..." : "Remove Background"}
      </button>
      {loading && (
        <div style={{ marginTop: "10px", width: "100%" }}>
          <div
            style={{
              background: "#ccc",
              width: "100%",
              height: "10px",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "#007bff",
                width: `${progress}%`,
                height: "100%",
                transition: "width 0.3s ease",
              }}
            ></div>
          </div>
          <p>{progress}%</p>
        </div>
      )}
      {imageUrl && (
        <div style={{ marginTop: "10px" }}>
          <h4>Processed Image:</h4>
          <img src={imageUrl} alt="Processed" width="200px" />
          <br />
          {/* Download option */}
          <a href={imageUrl} download="processed_image.png">
            <button style={{ marginTop: "10px" }}>Download Processed Image</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default BackgroundRemover;
