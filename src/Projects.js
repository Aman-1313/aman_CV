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
        'LinkedIn Automation':"https://github.com/Aman-1313/LinkedIn-Automation/blob/main/config.py",
        'GitHub Bug Prediction':"/GitHub Prediction"
    };
    const worksimg = {
        'Abacus Analysis': '/abacus.png',
        'Amrit Bani': '/amrit.png',
        'LinkedIn Automation':"",
        'GitHub Bug Prediction':"/pred.png"
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
                    <a class="intro2" href= {worksmap[work]} >
                        <button type="button" onMouseLeave={()=>setShow("")} onMouseEnter={()=>setShow(work)}  class="btn">
                            <li class="list-group-item">{work}</li>
                        </button>
                    </a>
                    <hr/>
                    </>)}
                </ul>
            </div>
            {show&&worksimg[show]!=="" &&<><div class="col-12 col-md-8">
            <img className='fade-in-image2' src={process.env.PUBLIC_URL + worksimg[show]} style={{width:"100%", height:"100%", borderRadius:16}}  alt="project" />
            
            </div></>}
            {show==="LinkedIn Automation"&&<><div class="col-12 col-md-8">
            <iframe title ="giph" src="https://giphy.com/embed/Ux6LdUWKNW0eTEIlvL"  class="fade-in-image2" style={{width:"100%", height:"100%", borderRadius:16}}></iframe>
            </div></>}
            
        </div>
       
        
    </div>
    );
  }
  export default Projects;