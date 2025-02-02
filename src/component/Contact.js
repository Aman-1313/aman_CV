import React from 'react';
import { Helmet } from "react-helmet-async";
import "./Contact.css";
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Contact() {
  const options = {
    scale: 1.1,
    speed: 300,
    max: 5
  };

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Contact | Aman Singh</title>
        <meta name="description" content="Get in touch with Aman Singh via email or social media. Visit my website for more information." />
        <meta name="keywords" content="Aman Singh, Contact Aman, Software Developer, Fitealthy, GitHub, Instagram" />
        <meta name="author" content="Aman Singh" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Contact Aman Singh" />
        <meta property="og:description" content="Connect with Aman Singh. Email, social media, and website links are available here." />
        <meta property="og:image" content="https://fitealthy.com/logo.png" />
        <meta property="og:url" content="https://fitealthy.com/contact" />
        <meta property="og:type" content="website" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aman Singh",
            "url": "https://fitealthy.com",
            "sameAs": [
              "https://github.com/Aman-1313",
              "https://www.instagram.com/a.gahonia/"
            ],
            "email": "aps6mtr@gmail.com"
          })}
        </script>
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
                <a className="nav-link " href="/projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/contact">Contact</a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="/image-resizer">Image Resizer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/file-compressor">File Compressor</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <Tilt className="container text-center my-5 p-4 tilt-effect" options={options}>
        <h1 className="intro mt-3"><span className="highlight">Contact Me!</span></h1>

        {/* Email Section */}
        <div className="col-12">
          <hr />
          <p className="intro2">📧 EMAIL</p>
          <a className="a" href="mailto:aps6mtr@gmail.com">→ aps6mtr@gmail.com</a>
        </div>

        {/* Social Media Section */}
        <div className="col-12">
          <hr />
          <p className="intro2">📱 SOCIAL MEDIA</p>
          <div className="row">
            <a className="a" href="https://www.instagram.com/a.gahonia/" target="_blank" rel="noopener noreferrer">
              → Instagram
            </a>
          </div>
        </div>

        {/* Website Section */}
        <div className="col-12">
          <hr />
          <p className="intro2">🌍 MY WEBSITE</p>
          <div className="row">
            <a className="a" href="https://fitealthy.com" target="_blank" rel="noopener noreferrer">
              → Visit Fitealthy.com
            </a>
          </div>
        </div>
      </Tilt>
    </>
  );
}
