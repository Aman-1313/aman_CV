import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Projects from './Projects';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Homepage />}/>
          <Route path='/Projects' element = {<Projects />}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;