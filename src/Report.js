import './App.css';
import "./css/bootstrap.min.css";
import resume from "./final draft.pdf"
import {Document, Page} from 'react-pdf'
function Report() {
    return (
        <div class="container">
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
            <div class="scroll">
            <Document className='pages' file={resume}>
            {[1,2,3,4,5,6,7,8,9].map(page => (
                <Page renderAnnotationLayer={false} renderTextLayer={false} pageNumber={page}/>
            ))}
            </Document>
            </div>
            
        </div>
        
    );
  }
  export default Report;