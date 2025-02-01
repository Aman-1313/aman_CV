import './App.css';
import "./css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Suspense, lazy } from 'react';

// Lazy-loaded components for performance
const Homepage = lazy(() => import('./Homepage'));
const Projects = lazy(() => import('./component/Projects'));
const Report = lazy(() => import('./component/Report'));
const Contact = lazy(() => import('./component/Contact'));

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Helmet>
            <title>Aman Singh | Software Developer Portfolio</title>
            <meta name="description" content="Explore Aman Singh's portfolio, projects, and reports. Connect with Aman for collaborations and tech insights." />
          </Helmet>

          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/github-prediction" element={<Report />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
