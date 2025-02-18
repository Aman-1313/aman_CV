import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import imageCompression from "browser-image-compression";
import { PDFDocument } from "pdf-lib";
import pako from "pako";
import { saveAs } from "file-saver";

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

        compressedBlob = compressedImage.size >= selectedFile.size
          ? new Blob([selectedFile], { type: selectedFile.type })
          : new Blob([compressedImage], { type: selectedFile.type });
      } else if (fileType === "application/pdf") {
        const pdfBytes = await selectedFile.arrayBuffer();
        const pdfDoc = await PDFDocument.load(pdfBytes);
        pdfDoc.removeMetadata();
        pdfDoc.setTitle("Optimized PDF");
        const compressedPdfBytes = await pdfDoc.save();
        const deflatedPdf = pako.deflate(new Uint8Array(compressedPdfBytes));
        compressedBlob = deflatedPdf.length >= pdfBytes.byteLength
          ? new Blob([compressedPdfBytes], { type: "application/pdf" })
          : new Blob([deflatedPdf], { type: "application/pdf" });
      } else {
        const fileBuffer = await selectedFile.arrayBuffer();
        const compressedData = pako.deflate(new Uint8Array(fileBuffer), { level: 9 });
        compressedBlob = compressedData.length >= fileBuffer.byteLength
          ? new Blob([selectedFile], { type: selectedFile.type })
          : new Blob([compressedData], { type: "application/octet-stream" });
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
    <div>
      <Helmet>
        <title>File Compressor | Aman Singh</title>
        <meta name="description" content="Compress files easily with Aman Singh's File Compressor tool." />
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
      <h1 className="text-center mb-4 ">File Compressor</h1>

      <div className="card p-4 shadow-sm">
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Select a file to compress:</label>
          <input className="form-control" type="file" id="formFile" onChange={handleFileChange} />
        </div>

        {selectedFile && (
          <>
            <p><strong>Selected File:</strong> {selectedFile.name}</p>
            <p><strong>Original Size:</strong> {formatFileSize(originalSize)}</p>
            <button className="btn btn-primary w-100" onClick={compressFile}>Compress File</button>
          </>
        )}
      </div>

      {status && <div className="alert alert-info text-center mt-3">{status}</div>}

      {compressedFile && (
        <div className="card p-4 shadow-sm mt-3 text-center">
          <h5>Compression Complete!</h5>
          <p><strong>Compressed Size:</strong> {formatFileSize(compressedSize)}</p>
          <p><strong>Compression Ratio:</strong> {compressionRatio}%</p>
          <button className="btn btn-success w-100" onClick={downloadFile}>Download Compressed File</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default FileCompressor;
