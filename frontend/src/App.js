// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Header from "./component/Header";
import ContactUs from './pages/Contactus/ContactUs';
import SoftwareDev from './pages/Software-dev/SoftwareDev';
import './App.css';
import Footer from './component/Footer';
import Home from './pages/Home/Home'
import SoftwareTraining from './pages/Training/SoftwareTraining';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/service/software-training" element={<SoftwareTraining />} />
            <Route path="/service/software-development" element={<SoftwareDev />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
