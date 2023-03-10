import { Link } from 'react-router-dom';
import './App.css';
import "./css/bootstrap.min.css";
import logo from "./res/pic.JPG"
function Homepage() {
    return (
      <div class="container">
        {/* <div class="navbar navbar-expand-lg bg-body-tertiary">
            <Link to='/'className="Name" >Aman P Singh<br/></Link>
            <Link to='/'className="Link">Homepage</Link>
            <a className='Link' href='https://aman-1313.github.io/'>Resume</a>
            <Link to='/Learning'className="Link">Learning</Link>
            <a className='Link' href='https://github.com/Aman-1313'>GitHub</a>
        </div>  */}
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
        <div class="fade-in-image">
        <img src={logo} className="picture"  alt="logo" />
        </div>    
            <p className='intro'> Hi there! My name is Aman Preet Singh, and I am a computer science graduate from the University of Manitoba. I am a skilled and passionate developer with experience in mobile and web application development, data science analysis, and automation solutions.
I am always eager to learn and take on new challenges in the field of technology, and I am excited to see what the future holds for me.     
            </p> 
    </div>
    );
  }
  export default Homepage;