import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import imageCompression from "browser-image-compression";
import { PDFDocument } from "pdf-lib";
import pako from "pako";
import { saveAs } from "file-saver";
import "./FileCompressor.css";

const FileCompressor = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [status, setStatus] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [compressionRatio, setCompressionRatio] = useState(0);

  const formatFileSize = (size) => {
    return size < 1024
      ? `${size} B`
      : size < 1048576
      ? `${(size / 1024).toFixed(2)} KB`
      : `${(size / 1048576).toFixed(2)} MB`;
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setOriginalSize(file.size);
      setCompressedFile(null);
      setCompressedSize(0);
      setStatus("");
      setCompressionRatio(0);
    }
  };

  const compressFile = async () => {
    if (!selectedFile) {
      setStatus("Please select a file first.");
      return;
    }

    setStatus("Compressing...");
    try {
      let compressedBlob;
      const fileType = selectedFile.type;

      if (fileType.startsWith("image/")) {
        const options = { maxSizeMB: 0.5, maxWidthOrHeight: 1080, useWebWorker: true };
        const compressedImage = await imageCompression(selectedFile, options);

        if (compressedImage.size >= selectedFile.size) {
          compressedBlob = new Blob([selectedFile], { type: selectedFile.type });
        } else {
          compressedBlob = new Blob([compressedImage], { type: selectedFile.type });
        }
      } else if (fileType === "application/pdf") {
        const pdfBytes = await selectedFile.arrayBuffer();
        const pdfDoc = await PDFDocument.load(pdfBytes);

        pdfDoc.removeMetadata();
        pdfDoc.setTitle("Optimized PDF");

        const compressedPdfBytes = await pdfDoc.save();
        const deflatedPdf = pako.deflate(new Uint8Array(compressedPdfBytes));

        if (deflatedPdf.length >= pdfBytes.byteLength) {
          compressedBlob = new Blob([compressedPdfBytes], { type: "application/pdf" });
        } else {
          compressedBlob = new Blob([deflatedPdf], { type: "application/pdf" });
        }
      } else {
        const fileBuffer = await selectedFile.arrayBuffer();
        const compressedData = pako.deflate(new Uint8Array(fileBuffer), { level: 9 });

        if (compressedData.length >= fileBuffer.byteLength) {
          compressedBlob = new Blob([selectedFile], { type: selectedFile.type });
        } else {
          compressedBlob = new Blob([compressedData], { type: "application/octet-stream" });
        }
      }

      setCompressedFile(compressedBlob);
      setCompressedSize(compressedBlob.size);
      setCompressionRatio(((1 - compressedBlob.size / originalSize) * 100).toFixed(2));
      setStatus("Compression Complete!");
    } catch (error) {
      console.error("Compression error:", error);
      setStatus("Compression failed.");
    }
  };

  const downloadFile = () => {
    if (compressedFile) {
      saveAs(compressedFile, `compressed_${selectedFile.name}`);
    }
  };

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>File Compressor | Aman Singh</title>
        <meta name="description" content="Compress files easily with Aman Singh's File Compressor tool." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Navbar */}
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
                <a className="nav-link" href="/image-resizer">Image Resizer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/file-compressor">File Compressor</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container my-5">
        <h1 className="intro mt-3"><span className="highlight">File Compressor</span></h1>

        <div className="mb-3 dark-mode">
          <label htmlFor="formFile" className="form-label">Select a file to compress:</label>
          <input className="form-control" type="file" id="formFile" onChange={handleFileChange} />
        </div>

        {selectedFile && (
          <>
            <div className="mb-3 text-center">
              <h5 className="intro mt-3"><span className="highlight">Selected File:</span></h5>
              <p>{selectedFile.name}</p>
              <p>Original Size: {formatFileSize(originalSize)}</p>
            </div>

            <div className="d-grid mb-3">
              <button className="btn btn-primary" onClick={compressFile}>Compress File</button>
            </div>
          </>
        )}

        {status && <p className="text-center status">{status}</p>}

        {compressedFile && (
          <div className="text-center">
            <h5 className="intro mt-3"><span className="highlight">Compressed File Ready:</span></h5>
            <p>Original Size: {formatFileSize(originalSize)}</p>
            <p>Compressed Size: {formatFileSize(compressedSize)}</p>
            <p>Compression Ratio: {compressionRatio}%</p>
            <div className="d-grid">
              <button className="btn btn-success" onClick={downloadFile}>Download Compressed File</button>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="info-section mt-4">
          <h2 className="text-center"><span className="highlight">About This Tool</span></h2>
          <p>
            This file compressor intelligently reduces the file size while maintaining quality.
            It supports multiple file formats and selects the best compression method for each type.
          </p>
          <h3>Supported File Types</h3>
          <ul>
            <li><strong>Images:</strong> (JPG, PNG, WebP) - Resized and compressed efficiently</li>
            <li><strong>PDF:</strong> Optimized by removing metadata and compressing content</li>
            <li><strong>Other Files:</strong> Uses lossless compression via pako</li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default FileCompressor;
