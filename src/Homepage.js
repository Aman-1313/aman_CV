import { Link } from 'react-router-dom';
import './App.css';
import "./css/bootstrap.min.css";
import logo from "./res/pic.JPG"
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }
function Homepage() {
    const options = {
        scale: 1.1,
        speed: 100,
        max: 3
      };
    return (
        <>
        
        <Tilt className="container" options={options}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Homepage</a>
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
        <div class="fade-in-image">
        <img src={logo} className="picture"  alt="logo" />
        </div>    
            <p className='intro'> Hi there! I am Aman Singh </p> 
            <p className='intro2'> I’m a mobile application developer, data scientist & front-end web developer</p>
            <a className='a' href="/Projects">→ See my projects</a>
            <a className='a' href="/info">→ More about me</a>
        </Tilt>
        
        </>
    );
  }
  export default Homepage;