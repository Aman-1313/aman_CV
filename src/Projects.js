import { useState } from 'react';
import './App.css';
import "./css/bootstrap.min.css";
function Projects() {
    const works = ['Abacus Analysis',
    'Amrit Bani',
    'LinkedIn Automation',
    'GitHub Bug Prediction'];
    const worksmap = {
        'Abacus Analysis': "https://abacusanalysis.ca",
        'Amrit Bani':"https://play.google.com/store/apps/details?id=com.Amrit",
        'LinkedIn Automation':"",
        'GitHub Bug Prediction':""
    };
    const worksimg = {
        'Abacus Analysis': '/abacus.png',
        'Amrit Bani': '/amrit.png',
        'LinkedIn Automation':"",
        'GitHub Bug Prediction':""
    };
      const [show, setShow] = useState("")
    return (
      <div class="container">
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Homepage</a>
                    <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
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
        <div class="row">
            <div class="col col-lg-4">
                <ul>
                <div className='container mb-5'><h2 className='list'>Projects</h2></div>
                    {works.map( work => 
                    <>
                    <a class="nav-link" href= {worksmap[work]} >
                        <button type="button" onMouseLeave={()=>setShow("")} onMouseEnter={()=>setShow(work)}  class="btn">
                            <li class="list-group-item">{work}</li>
                        </button>
                    </a>
                    <hr/>
                    </>)}
                </ul>
            </div>
            {show&&<><div class="col-12 col-md-8">
            <img className='fade-in-image2' src={process.env.PUBLIC_URL + worksimg[show]} style={{width:"100%", height:"100%", borderRadius:16}}  alt="project" />
            {/* <iframe style={{borderRadius:16}} src={worksmap[show]} width="100%" height="100%">
                <p>Your browser does not support iframes.</p>
            </iframe> */}
            </div></>}
            
        </div>
       
        
    </div>
    );
  }
  export default Projects;