import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";

import "./ImageResizer.css"; // Reusing your homepage styles

function ImageResizer() {
  const [imageUri, setImageUri] = useState(null);
  const [width, setWidth] = useState('100');
  const [height, setHeight] = useState('100');
  const [resizedUri, setResizedUri] = useState(null);

  // Handle file selection from the user
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageURL = URL.createObjectURL(file);
      setImageUri(imageURL);
      setResizedUri(null);
    }
  };

  // Convert an image element into a base64-encoded JPEG string using a canvas
  const getBase64Image = (img) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/jpeg', 0.8));
    });
  };

  // Resize the image using a canvas and return the resized base64 image
  const resizeImageWeb = (base64ImageUri, targetWidth, targetHeight) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = base64ImageUri;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = parseInt(targetWidth, 10);
        canvas.height = parseInt(targetHeight, 10);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.onerror = (error) => reject(error);
    });
  };

  // Trigger the resizing process
  const handleResize = async () => {
    if (imageUri && width && height) {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = imageUri;
      img.onload = async () => {
        const base64ImageUri = await getBase64Image(img);
        const resized = await resizeImageWeb(base64ImageUri, width, height);
        setResizedUri(resized);
      };
      img.onerror = (error) => {
        console.error('Error loading image:', error);
      };
    }
  };

  // Trigger image download by creating a temporary download link
  const downloadImage = () => {
    if (resizedUri) {
      const link = document.createElement('a');
      link.href = resizedUri;
      link.download = 'resized-image.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      {/* SEO & Metadata */}
      <Helmet>
        <title>Image Resizer | Aman Singh</title>
        <meta name="description" content="Resize your images easily with Aman Singh's Image Resizer tool." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Navbar (reuse from Homepage) */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Aman Singh</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="/projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/image-resizer">Image Resizer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/file-compressor">File Compressor</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container my-5">
        <h1 className="intro mt-3"><span className="highlight">Image Resizer</span></h1>

          <div className="mb-3 dark-mode">
            <label htmlFor="formFile" className="form-label">
              Select an image to resize:
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {imageUri && (
            <>
              <div className="mb-3 text-center">
                <h5 className="intro mt-3"><span className="highlight">Original Image:</span></h5>
                <img
                  src={imageUri}
                  alt="Original"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: '300px' }}
                />
              </div>
              <div className="row mb-3 dark-mode">
                <div className="col">
                  <input
                    type="number"
                    className="form-control "
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="Width"
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    className="form-control dark-mode"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Height"
                  />
                </div>
              </div>
              <div className="d-grid mb-3">
                <button className="btn btn-primary" onClick={handleResize}>
                  Resize Image
                </button>
              </div>
            </>
          )}

          {resizedUri && (
            <div className="text-center">
              <h5 className="intro mt-3"><span className="highlight">Resized Image:</span></h5>
              <img
                src={resizedUri}
                alt="Resized"
                className="img-fluid rounded shadow mb-3"
                style={{ maxHeight: '300px' }}
              />
              <div className="d-grid">
                <button className="btn btn-success" onClick={downloadImage}>
                  Download Resized Image
                </button>
              </div>
            </div>
          )}
        {/* Info Section */}
        <div className="info-section mt-4">
          <h2 className="text-center"><span className="highlight">About This Tool</span></h2>
          <p>
            This Image resizer lets you change your image dimensions however you want while maintaining quality.
            It supports multiple file formats.
          </p>
          <h3>Supported File Types</h3>
          <ul>
            <li><strong>Images:</strong> (JPG, PNG, WebP) - Resized efficiently</li>
          </ul>
          <a className="nav-link " href="/background-remover"> Background Remover</a>
        </div>
      </div>
    </>
  );
}

export default ImageResizer;
