import Container from 'react-bootstrap/Container';
import './header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Facebook from './social-medias/Facebook';
import Instagram from './social-medias/Instagram';
import LinkedIn from './social-medias/LinkedIn'
import Telegram from './social-medias/Telegram';
import Twitter from './social-medias/Twitter'
import Youtube from './social-medias/Youtube';
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='csolve'>Csolve_Tech+</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='Nav-itemes'>Home</Nav.Link>
            
            <Nav.Link href="#" className='Nav-itemes'>About Us</Nav.Link>

            <NavDropdown title="Services" id="basic-nav-dropdown" className='Nav-itemes'>
              <NavDropdown.Item href="#action/3.1">Software Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Software Training Center
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Technology Material Import</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Developer-Company Central HUB
              </NavDropdown.Item>
             {/* <NavDropdown.Item href="#action/3.4">
  Network and CCTV(Closed-Circuit Television) installation 
</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Resource" id="basic-nav-dropdown" className='Nav-itemes'>
              <NavDropdown.Item href="#action/3.1">Bloges</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Guides
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="/contact" className='Nav-itemes'>Contact Us</Nav.Link>

            <Nav.Link href="#home" className="separate-socials-from-tabs"><Facebook /></Nav.Link>
            <Nav.Link href="#home"><Instagram /></Nav.Link>
            <Nav.Link href="#home"><LinkedIn /></Nav.Link>
            <Nav.Link href="#home"><Telegram /></Nav.Link>
            <Nav.Link href="#home"><Twitter /></Nav.Link>
            <Nav.Link href="#home"><Youtube /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;