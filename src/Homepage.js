import logo from "./res/pic.JPG";
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';
import { Helmet } from "react-helmet-async";
import "./Homepage.css"; // Dark mode styles

// Tilt Component for Effects
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
        scale: 1.1,
        speed: 300,
        max: 5
    };

    return (
        <>
            {/* SEO Optimization */}
            <Helmet>
                <title>Aman Singh | Mobile & Web Developer</title>
                <meta name="description" content="Hi! I'm Aman Singh, a mobile application developer, data scientist, and front-end web developer. Check out my projects and get in touch!" />
                <meta name="keywords" content="Aman Singh, mobile developer, web developer, data scientist, React Native, frontend developer" />
                <meta name="author" content="Aman Singh" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph for Social Media */}
                <meta property="og:title" content="Aman Singh | Mobile & Web Developer" />
                <meta property="og:description" content="Hi! I'm Aman Singh, a mobile application developer, data scientist, and front-end web developer. Check out my projects and get in touch!" />
                <meta property="og:image" content={logo} />
                <meta property="og:url" content="https://yourwebsite.com" />
                <meta property="og:type" content="website" />

                {/* Structured Data (JSON-LD) */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Aman Singh",
                        "url": "https://yourwebsite.com",
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
                        "email": "aps6mtr@gmail.com"
                    })}
                </script>

                {/* Viewport meta tag for mobile optimization */}
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
                            <li className="nav-item"><a className="nav-link" href="https://github.com/Aman-1313" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                            <li className="nav-item"><a className="nav-link" href="/image-resizer">Image Resizer</a></li>

                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <Tilt className="container text-center my-5 p-4 tilt-effect" options={options}>
                <div className="fade-in-image">
                    <img src={logo} className="profile-pic shadow-lg" alt="Aman Singh - Developer" />
                </div>
                <h1 className="intro mt-3">Hi there! I’m <span className="highlight">Aman Singh</span></h1>
                <p className="intro2">I’m a <span className="highlight">mobile application developer</span>, <span className="highlight">data scientist</span> & <span className="highlight">front-end web developer.</span></p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                    <a className="btn btn-glass shadow-sm" href="/projects">See My Projects</a>
                    <a className="btn btn-outline-light shadow-sm" href="/contact">More About Me</a>
                </div>
            </Tilt>
        </>
    );
}

export default Homepage;
