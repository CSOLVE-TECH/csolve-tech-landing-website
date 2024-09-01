import './App.css';
import Footer from './component/Footer';
import About from './pages/About';
// import Header from './component/Header';
import Home from './pages/Home'; // Ensure this is the correct path
import ContactUs from './pages/ContactUs'; // Ensure this is the correct path
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
