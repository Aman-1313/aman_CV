import './App.css';
import "./css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Projects from './component/Projects';
import Resume from './component/Resume';
import Report from './component/Report';
import Contact from './component/Contact'
import back from "./res/back.jpg"
function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${back})`,  }} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Homepage />}/>
          <Route path='/Projects' element = {<Projects />}/>
          <Route path='/Resume' element = {<Resume />}/>
          <Route path='/Contact' element = {<Contact />}/>
          <Route path='/GitHub Prediction' element = {<Report />}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;