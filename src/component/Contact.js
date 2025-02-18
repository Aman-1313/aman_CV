import React from 'react';
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Contact | Aman Singh</title>
        <meta name="description" content="Get in touch with Aman Singh via email or social media. Explore my projects and collaborations." />
        <meta name="keywords" content="Aman Singh, Contact Aman, Software Developer, Fitealthy, GitHub, Instagram, Fitness App" />
        <meta name="author" content="Aman Singh" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Contact Aman Singh" />
        <meta property="og:description" content="Reach out to Aman Singh for collaborations, queries, or just to connect!" />
        <meta property="og:image" content="https://fitealthy.com/logo.png" />
        <meta property="og:url" content="https://fitealthy.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Navbar */}
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
                <a className="nav-link active" href="/contact">Contact</a>
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

      {/* Contact Section */}
      <div className="container my-5 text-center">
        <h1 className="intro mt-3"><span className="highlight">Get in Touch</span></h1>
        <p className="lead">I’d love to hear from you! Whether you have a question, a collaboration idea, or just want to say hi, feel free to reach out.</p>

        <div className="card mx-auto mt-4 p-4 shadow" style={{ maxWidth: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">📧 Email Me</h5>
            <p>
              <a href="mailto:info@fitealthy.com" className="a">info@fitealthy.com</a>
            </p>
            <hr />
            <h5 className="card-title">📱 Connect on Social Media</h5>
            <p>
              <a href="https://www.instagram.com/a.gahonia/" target="_blank" rel="noopener noreferrer" className="a">Instagram</a>
            </p>
            <p>
              <a href="https://github.com/Aman-1313" target="_blank" rel="noopener noreferrer" className="a">GitHub</a>
            </p>
            <hr />
            <h5 className="card-title">🌍 Visit My Website</h5>
            <p>
              <a href="https://fitealthy.com" target="_blank" rel="noopener noreferrer" className="a">Fitealthy.com</a>
            </p>
            <hr />
            <a className="btn btn-glass shadow-sm" href="/projects">Explore My Projects</a>
          </div>
        </div>
      </div>
    </>
  );
}
