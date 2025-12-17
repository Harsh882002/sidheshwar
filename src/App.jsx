import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import Administration from './pages/Administration';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import StudentLife from './pages/StudentLife';
import Contact from './pages/Contact';
import SearchResults from './pages/SearchResults';
import Media from './pages/Media';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path='/media' element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
