import React from 'react'

export default function Contact() {
  return (
      <div className="container">
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
        
        <div className="row justify-content-center">
        <h2 className='intro'>Contact me</h2>
          <div className="col-6 ">
          <hr/>
            <p className='intro2'>MAIL</p>
            <a className='a' href="mailto:aps6mtr@gmail.com">→ aps6mtr@gmail.com</a>
          </div>
          <div className="col-6 col-md-6 m-5">
          <hr/>
            <p className='intro2'>SOCIAL MEDIA</p>
            <div className='row'>
            <a className='a' href="https://www.instagram.com/a.gahonia/">→ instagram</a>
            </div>
            <div className='row'>
            <a className='a' href="https://www.linkedin.com/in/aman-preet-singh-55b1871a6/">→ LinkedIn</a> 
            </div>
            
            
          </div>
        </div>
      </div> 
  )
}
