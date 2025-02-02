import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import "./Projects.css"; // Updated styles for dark mode
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';

// Tilt Component for Effects
function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

function Projects() {
    const options = {
        scale: 1.1,
        speed: 300,
        max: 5
    };

    const works = [
        'Abacus Analysis',
        'Amrit Bani',
        'LinkedIn Automation',
        'GitHub Bug Prediction'
    ];

    const worksmap = {
        'Abacus Analysis': "https://abacusanalysis.ca",
        'Amrit Bani': "https://play.google.com/store/apps/details?id=com.Amrit",
        'LinkedIn Automation': "https://github.com/Aman-1313/LinkedIn-Automation/blob/main/config.py",
        'GitHub Bug Prediction': "/GitHub Prediction"
    };

    const worksimg = {
        'Abacus Analysis': '/abacus.png',
        'Amrit Bani': '/amrit.png',
        'LinkedIn Automation': "",
        'GitHub Bug Prediction': "/pred.png"
    };

    const [show, setShow] = useState("");

    return (
        <>
            {/* SEO Optimization */}
            <Helmet>
                <title>Aman Singh | Projects</title>
                <meta name="description" content="Explore projects by Aman Singh, including Abacus Analysis, Amrit Bani, LinkedIn Automation, and GitHub Bug Prediction." />
                <meta name="keywords" content="Aman Singh, projects, software development, data science, automation, mobile apps, GitHub Bug Prediction" />
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
                            <a className="nav-link active" href="/projects">Projects</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
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

            {/* Projects Section */}
            <Tilt className="container my-5 p-4 tilt-effect" options={options}>
                <h1 className="intro mt-3"><span className="highlight">My Projects</span></h1>
                <div className="row mt-4">
                    {/* Project List */}
                    <div className="col-lg-4">
                        <ul className="list-group">
                            {works.map(work => (
                                <li key={work} className="list-group-item project-item">
                                    <a href={worksmap[work]} className="project-link"
                                       onMouseEnter={() => setShow(work)} onMouseLeave={() => setShow("")}>
                                        {work}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Project Preview */}
                    <div className="col-lg-8">
                        {show && worksimg[show] !== "" && (
                            <div className="preview-container">
                                <img src={process.env.PUBLIC_URL + worksimg[show]} className="preview-image" alt={show} />
                            </div>
                        )}

                        {show === "LinkedIn Automation" && (
                            <div className="preview-container">
                                <iframe title="giph" src="https://giphy.com/embed/Ux6LdUWKNW0eTEIlvL"
                                        className="preview-image" allowFullScreen></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </Tilt>
        </>
    );
}

export default Projects;
