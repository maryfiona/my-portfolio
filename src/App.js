import './App.css'
// src/App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header'; // Make sure you have the Header.js file in the components folder
// import About from './section/About'; // Make sure you have the About.js file in the components folder
// import Projects from './section/Projects'; // Make sure you have the Projects.js file in the components folder
// import Skills from './Component/Skills'; // Make sure you have the Skills.js file in the components folder
// import Contact from './section/Contact'; // Make sure you have the Contact.js file in the components folder

const App = () => {
  return (
    // <Router>
      <Header />
      // <Routes>
       // <Route path="/" element={<About />} />
       // <Route path="/projects" element={<Projects />} />
      //  <Route path="/skills" element={<Skills />} />
       // <Route path="/contact" element={<Contact />} />
      // </Routes> 
    // </Router>
  );
}

export default App;

