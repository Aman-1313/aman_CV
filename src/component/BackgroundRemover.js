/* global cv */
import React, { useState, useRef, useEffect } from "react";
import * as bodyPix from "@tensorflow-models/body-pix";
import "@tensorflow/tfjs"; // TensorFlow.js

const BackgroundRemover = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef(null);
  const [isOpenCvLoaded, setIsOpenCvLoaded] = useState(false);

  // Dynamically load OpenCV.js
useEffect(() => {
  if (typeof cv !== "undefined") {
    setIsOpenCvLoaded(true);
    return;
  }

  const loadOpencvScript = () => {
    const script = document.createElement("script");
    script.src = "https://docs.opencv.org/4.x/opencv.js";
    script.async = true;
    script.onload = () => {
      setIsOpenCvLoaded(true);
    };
    document.body.appendChild(script);
  };

  loadOpencvScript();
}, []);

  // Load the BodyPix model for segmentation
  const loadBodyPixModel = async () => {
    const model = await bodyPix.load();
    return model;
  };

  // Handle file change (image upload)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      setImageUrl(null);
    }
  };

  // Main function to remove the background using GrabCut + BodyPix segmentation
  const removeBackground = async () => {
    if (!selectedFile) {
      alert("Please select an image first!");
      return;
    }
    if (!isOpenCvLoaded) {
      alert("OpenCV.js is still loading...");
      return;
    }
    setLoading(true);
    setProgress(0);

    const img = new Image();
    img.src = selectedFile;
    img.onload = async () => {
      setProgress(10);

      // Step 1: Apply GrabCut using OpenCV.js to generate a rough segmentation mask
      const mask = await applyGrabCut(img);
      setProgress(40);

      // Step 2: Use BodyPix for fine-grained segmentation of the foreground
      const model = await loadBodyPixModel();
      const segmentation = await model.segmentPerson(img);
      setProgress(70);

      // Combine the GrabCut mask and the BodyPix segmentation mask
      const refinedMask = applyBodyPixMask(img, segmentation, mask);
      setProgress(85);

      // Create a canvas to display the result
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Apply refined mask: set alpha to 0 for background pixels
      for (let i = 0; i < data.length; i += 4) {
        const idx = i / 4;
        if (refinedMask[idx] === 0) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setProgress(100);

      // Convert canvas to data URL to display the processed image
      const resultUrl = canvas.toDataURL();
      setImageUrl(resultUrl);
      setLoading(false);
    };
  };

  // Apply GrabCut using OpenCV.js to generate a rough mask
  const applyGrabCut = async (img) => {
    // Wait for OpenCV.js to be ready
    if (!cv || !cv.onRuntimeInitialized) {
      console.error("OpenCV.js is not initialized yet!");
      return [];
    }

    // Read image into an OpenCV Mat
    const mat = cv.imread(img);
    const mask = new cv.Mat();
    const bgdModel = new cv.Mat();
    const fgdModel = new cv.Mat();

    // Define a rectangle for the foreground region (adjust these values as needed)
    const rect = new cv.Rect(10, 10, mat.cols - 20, mat.rows - 20);

    // Run GrabCut algorithm; 5 iterations
    cv.grabCut(mat, mask, rect, bgdModel, fgdModel, 5, cv.GC_INIT_WITH_RECT);

    // Create a result mask: pixels with value 1 or 3 are foreground
    const resultMask = new Array(mat.cols * mat.rows).fill(0);
    for (let i = 0; i < mask.data.length; i++) {
      if (mask.data[i] === 1 || mask.data[i] === 3) {
        resultMask[i] = 1;
      } else {
        resultMask[i] = 0;
      }
    }

    // Clean up OpenCV objects
    mat.delete();
    mask.delete();
    bgdModel.delete();
    fgdModel.delete();

    return resultMask;
  };

  // Combine the BodyPix segmentation mask with the GrabCut mask to refine segmentation
  const applyBodyPixMask = (img, segmentation, grabCutMask) => {
    const refinedMask = new Array(img.width * img.height).fill(0);

    // Use BodyPix segmentation: mark pixels as foreground if segmentation indicates person (value 1)
    for (let i = 0; i < segmentation.data.length; i++) {
      if (segmentation.data[i] === 1) {
        refinedMask[i] = 1;
      }
    }

    // Combine with GrabCut mask: if either mask indicates foreground, mark as foreground
    for (let i = 0; i < grabCutMask.length; i++) {
      if (grabCutMask[i] === 1) {
        refinedMask[i] = 1;
      }
    }

    return refinedMask;
  };

  return (
    <div className="container">
      <h2>Image Background Remover (GrabCut + AI Segmentation)</h2>

      {/* File input */}
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {selectedFile && <img src={selectedFile} alt="Input" width="200px" />}

      {/* Button */}
      <button onClick={removeBackground} disabled={loading}>
        {loading ? "Processing..." : "Remove Background"}
      </button>

      {/* Progress bar */}
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

      {/* Processed image */}
      {imageUrl && (
        <div>
          <h4>Processed Image:</h4>
          <img src={imageUrl} alt="Processed" width="200px" />
        </div>
      )}

      {/* Hidden canvas for processing */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default BackgroundRemover;
