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
          <div className="col-12 col-md-8">
            <form action="https://formsubmit.co/amansainigahonia@gmail.com" method="POST">
              <fieldset>
                <input type="hidden" name="_captcha" value="false"/>               
                <input type="hidden" name="_autoresponse" value="Thank you htmlFor your message. I will get back to you within 5 working days."/>
                <h2 className='intro'>Contact me</h2>
                <div className="form-group mt-4">
                  <input required="" type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mt-4">
                  <input required="" type="text" name="_subject" className="form-control" id="subjectText" aria-describedby="emailHelp" placeholder="Enter message title" />
                </div>
                <div className="form-group mt-4">
                  <textarea name="message" required="" placeholder="Enter your message" className="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>
                <div className='d-flex justify-content-center'>
                  <button type="submit" className="btn btn-primary mt-4 flex-center rounded-pill">Submit <ion-icon class="ms-1 md hydrated" name="chatbox-ellipses-outline" role="img" aria-label="chatbox ellipses outline"></ion-icon> </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div> 
  )
}
