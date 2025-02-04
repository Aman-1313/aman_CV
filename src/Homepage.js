import logo from "./res/pic.JPG";
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';
import { Helmet } from "react-helmet-async";
import "./Homepage.css"; // Dark mode & minimalist styles

// Tilt Component for subtle effects
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

function Homepage() {
  const options = {
    scale: 1.05,
    speed: 300,
    max: 3
  };

  return (
    <>
      {/* SEO & Structured Data */}
      <Helmet>
        <title>Aman Singh | Mobile & Web Developer</title>
        <meta name="description" content="Aman Singh is a highly skilled mobile and web developer, data scientist, and front-end expert. Discover Aman Singh's innovative projects and creative solutions in technology." />
        <meta name="keywords" content="Aman Singh, mobile developer, web developer, data scientist, front-end developer, Aman Singh portfolio, Aman Singh projects" />
        <meta name="author" content="Aman Singh" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.iaman.ca/" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Aman Singh | Mobile & Web Developer" />
        <meta property="og:description" content="Explore the portfolio of Aman Singh – a mobile and web developer, data scientist, and front-end expert creating innovative digital solutions." />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://www.iaman.ca/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aman Singh" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aman Singh | Mobile & Web Developer" />
        <meta name="twitter:description" content="Discover the work of Aman Singh, a mobile and web developer, data scientist, and front-end expert dedicated to crafting innovative solutions." />
        <meta name="twitter:image" content={logo} />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aman Singh",
            "url": "https://www.iaman.ca/",
            "sameAs": [
              "https://github.com/Aman-1313",
              "https://www.instagram.com/a.gahonia/"
            ],
            "jobTitle": "Mobile Application Developer & Data Scientist",
            "worksFor": {
              "@type": "Organization",
              "name": "Fitealthy"
            },
            "image": logo,
            "email": "aps6mtr@gmail.com",
            "description": "Aman Singh is a mobile and web developer, data scientist, and front-end expert known for innovative digital solutions."
          })}
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Minimalist Navbar */}
      <nav className="navbar navbar-expand-lg minimalist-navbar">
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

      {/* Hero Section */}
      <section className="hero minimal-hero">
        <Tilt className="container text-center my-5 p-4 tilt-effect" options={options}>
          <div className="fade-in-image">
            <img src={logo} className="profile-pic shadow" alt="Aman Singh - Developer" />
          </div>
          <h1 className="intro mt-3">Hello, I'm <span className="highlight">Aman Singh</span></h1>
          <p className="intro2">
            I am a mobile and web developer, data scientist, and front-end expert dedicated to crafting innovative digital solutions.
          </p>
          <div className="mt-3">
            <a className="btn btn-glass shadow-sm" href="/projects">View Projects</a>
          </div>
        </Tilt>
      </section>

      {/* Additional SEO Content */}
      <section className="container my-5 seo-content">
        <h2>About Aman Singh</h2>
        <p>
          Aman Singh is a seasoned mobile and web developer with extensive expertise in data science and front-end development. Focused on clean design and intuitive user experiences, Aman Singh combines technical skill with creative vision to deliver innovative digital solutions.
        </p>
        <h3>Expertise & Innovation</h3>
        <p>
          With a passion for technology and a commitment to excellence, Aman Singh leverages modern frameworks and tools to build scalable mobile applications and dynamic websites. From React Native to responsive web design, every project is an opportunity to create meaningful impact.
        </p>

        <p>
          Connect with Aman Singh today to discover how cutting-edge technology and minimalist design can elevate your digital experience.
        </p>
      </section>

      {/* Minimalist Footer */}
      <footer className="footer minimal-footer text-center py-3">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Aman Singh. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Homepage;
