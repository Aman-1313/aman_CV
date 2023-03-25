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
                            <a class="nav-link" href='/Resume'>Resume</a>
                            <a class="nav-link" href='https://github.com/Aman-1313'>GitHub</a>
                            <a class="nav-link" href='/Projects'>Projects</a>
                            <a class="nav-link" href='/Contact'>Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="row row-lg-12">
            <div class="col col-lg-4">
                <ul class="list">
                    <h2 className='intro'>Projects</h2>
                    <li class="list-group-item mt-5">Abacus Analysis</li>
                    <hr/>
                    <li class="list-group-item">Amrit Bani</li>
                    <hr/>
                    <li class="list-group-item">LinkedIn Automation</li>
                    <hr/>
                    <li class="list-group-item">GitHub Bug Prediction</li>
                </ul>
            </div>
            <div class="col col-lg-8">
            <iframe style={{borderRadius:16}} src="https://abacusanalysis.ca" width="100%" height="100%">
            <p>Your browser does not support iframes.</p>
        </iframe>
            </div>
        </div>
       
        
    </div>
    );
  }
  export default Projects;