import resume from "../Aman P Singh - Resume.pdf"
import {Document, Page} from 'react-pdf'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
function Resume() {
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
                <Page renderAnnotationLayer={false} renderTextLayer={false} pageIndex={0} />
            </Document>
            </div>
            
        </div>
        
    );
  }
  export default Resume;