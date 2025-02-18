import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";

function ImageResizer() {
  const [imageUri, setImageUri] = useState(null);
  const [width, setWidth] = useState('100');
  const [height, setHeight] = useState('100');
  const [resizedUri, setResizedUri] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageURL = URL.createObjectURL(file);
      setImageUri(imageURL);
      setResizedUri(null);
    }
  };

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

  const handleResize = async () => {
    if (imageUri && width && height) {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = imageUri;
      img.onload = async () => {
        const base64ImageUri = imageUri;
        const resized = await resizeImageWeb(base64ImageUri, width, height);
        setResizedUri(resized);
      };
      img.onerror = (error) => {
        console.error('Error loading image:', error);
      };
    }
  };

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
      <Helmet>
        <title>Image Resizer | Aman Singh</title>
        <meta name="description" content="Resize your images easily with Aman Singh's Image Resizer tool." />
      </Helmet>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                <a className="nav-link" href="/image-resizer">Image Resizer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/file-compressor">File Compressor</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1 className="text-center mb-4">Image Resizer</h1>
        <div className="card p-4 shadow-sm">
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Select an image to resize:</label>
          <input className="form-control" type="file" id="formFile" accept="image/*" onChange={handleImageChange} />
        </div>
        </div>

        {imageUri && (
          <div className="text-center">
            <h5>Original Image:</h5>
            <img src={imageUri} alt="Original" className="img-fluid rounded shadow" style={{ maxHeight: '300px' }} />
            <div className="row mt-3">
              <div className="col">
                <input type="number" className="form-control" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="Width" />
              </div>
              <div className="col">
                <input type="number" className="form-control" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height" />
              </div>
            </div>
            <button className="btn btn-primary mt-3" onClick={handleResize}>Resize Image</button>
          </div>
        )}

        {resizedUri && (
          <div className="text-center mt-4">
            <h5>Resized Image:</h5>
            <img src={resizedUri} alt="Resized" className="img-fluid rounded shadow mb-3" style={{ maxHeight: '300px' }} />
            <button className="btn btn-success" onClick={downloadImage}>Download Resized Image</button>
          </div>
        )}
      </div>
    </>
  );
}

export default ImageResizer;
