import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTelegramPlane, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function BasicExample() {
  // State for managing dropdown hover
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showResourceDropdown, setShowResourceDropdown] = useState(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-navbar">
      <Container>
        {/* Wrap the image in an anchor tag or Nav.Link to make it clickable */}
        <Navbar.Brand href="/" className="csolve">
          <div className="brand-image-container">
            <img src="/assets/images/logo.png" alt="Brand" className="brand-image" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="Nav-itemes">Home</Nav.Link>
            <Nav.Link href="/about" className="Nav-itemes">About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" className="Nav-itemes">
              <NavDropdown.Item href="/service/software-development">Software Development</NavDropdown.Item>
              <NavDropdown.Item href="/service/software-training">Software Training Center</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact" className="Nav-itemes">Contact Us</Nav.Link>
            {/* Social Media Icons with Blur Effect */}
            <Nav.Link href="#home" className="separate-socials-from-tabs">
              <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            </Nav.Link>
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </Nav.Link>
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
            </Nav.Link>
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faTelegramPlane} className="social-icon" />
            </Nav.Link>
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </Nav.Link>
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
