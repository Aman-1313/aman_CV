import { Link } from 'react-router-dom';
import './App.css';
import "./css/bootstrap.min.css";
function Projects() {
    return (
      <div class="container">
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Homepage</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href='https://aman-1313.github.io/'>Resume</a>
                            <a class="nav-link" href='https://github.com/Aman-1313'>GitHub</a>
                            <a class="nav-link" href='/Projects'>Projects</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div className='pages'>
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
        </div>
    </div>
    );
  }
  export default Projects;