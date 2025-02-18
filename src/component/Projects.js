import { Helmet } from "react-helmet-async";

function Projects() {
    const projects = [
        {
            name: "Amrit Bani",
            link: "https://play.google.com/store/apps/details?id=com.Amrit",
            description: "A spiritual mobile app that streams Gurbani, providing users with devotional content anytime, anywhere."
        },
        {
            name: "LinkedIn Automation",
            link: "https://github.com/Aman-1313/LinkedIn-Automation/blob/main/config.py",
            description: "A Python-based automation script to apply for jobs on LinkedIn."
        },
        {
            name: "Fitealthy",
            link: "https://fitealthy.com",
            description: "A fitness platform offering AI-powered tracking, blogs, and tools for a healthier lifestyle."
        },
        {
            name: "Image Resizer",
            link: "/image-resizer",
            description: "A simple web tool to resize images quickly and efficiently without quality loss."
        },
        {
            name: "File Compressor",
            link: "/file-compressor",
            description: "An online file compression tool that reduces file size while maintaining quality."
        },
        {
            name: "Workout Tracker",
            link: "https://apps.apple.com/ca/app/fitealthy-tracker/id6741205749",
            description: "A workout tracking app that helps users monitor their fitness progress and routines."
        }
    ];

    return (
        <>
            {/* SEO Optimization */}
            <Helmet>
                <title>Aman Singh | Projects</title>
                <meta name="description" content="Explore projects by Aman Singh, including Amrit Bani, LinkedIn Automation, Fitealthy, and more." />
                <meta name="keywords" content="Aman Singh, projects, software development, data science, automation, mobile apps, fitness, AI" />
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
                                <a className="nav-link active" href="/projects">Projects</a>
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

            {/* Projects Section */}
            <div className="container mt-5">
                <h2 className="text-center mb-4">My Projects</h2>
                <div className="row justify-content-center">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title">{project.name}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <a href={project.link} className="btn btn-glass shadow-sm" target="_blank" rel="noopener noreferrer">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;
