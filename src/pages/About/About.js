import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./about.css";
import { Card, CardGroup, Button, Modal } from "react-bootstrap";
const About = () => {
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setShowCard(!showCard);
  };
  const navigateToContactPage =()=>{
     navigate('/contact');
    
  }

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/about-us-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.6)", // Optional: adds a shadow to the text
          }}
        >
          <h1>Csolve_Tech+</h1>
          <h1 className="animated-heading">The ultimate complete technology solution</h1>
                    
          </div>
      </div>

      <div className="platform">
        <h5>WE-BRIDGE PLATFORM</h5>
        <h1>Complete Technology Solution for your business</h1>
        <div className="techinfo">
          <p>
            Businesses today need to protect their digital assets and
            information – without complicated and expensive setup. We-Bridge
            partners with only the best companies to serve you a complete and
            curated platform of cybersecurity and data management solutions.
          </p>
        </div>
      </div>

      <div className="main-about">
        <div className="technology">
          <div className="our-process">
            <h1>Our Process</h1>
            <div className="techinfo">
              <p>
                At Csolve Tech+, we’re focused on providing only the best
                solutions for our customers so they can grow their business
                without headaches. When we evaluate new products to add to our
                offering, they must meet our strict criteria:
              </p>
            </div>
          </div>

          <CardGroup className="about-card">
        <Card className="card-item">
          <div className="card-content">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/software.jpg`} className="card-image" />
            <Card.Body className="card-body">
              <Card.Title>Software Only</Card.Title>
              <Card.Text>
                At present, we offer a comprehensive range of software solutions, catering to various needs and providing versatile options to address a wide array of requirements.
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
        <Card className="card-item">
          <div className="card-content">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/secure.jpg`} className="card-image" />
            <Card.Body className="card-body">
              <Card.Title>Extremely Secure</Card.Title>
              <Card.Text>
                The product we provide is designed with the highest level of security in mind, ensuring robust protection and safeguarding of your data and operations.
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
      </CardGroup>

      <CardGroup className="about-card">
        <Card className="card-item">
          <div className="card-content">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/afford.jpeg`} className="card-image" />
            <Card.Body className="card-body">
              <Card.Title>Affordable</Card.Title>
              <Card.Text>
                Our product is priced competitively, offering significant cost savings compared to other solutions available in the market, making it an economically advantageous choice for our customers.
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
        <Card className="card-item">
          <div className="card-content">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/reliable.jpeg`} className="card-image" />
            <Card.Body className="card-body">
              <Card.Title>Reliable</Card.Title>
              <Card.Text>
                Our product and company are both highly dependable, providing a consistent and trustworthy experience that allows our customers to confidently commit to and rely on us for the long term.
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
      </CardGroup>
        </div>
      </div>
      <div className="platform">
        <h5>GET STARTED</h5>
        <h1>Interested in Partnering with Csolve Tech+?</h1>
        <div className="techinfo">
          <div class="buttons">
          <button className="blob-btn" onClick={navigateToContactPage}>
            Send Us Message
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </button>
            <br />

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    result="blur"
                    stdDeviation="10"
                  ></feGaussianBlur>
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                    result="goo"
                  ></feColorMatrix>
                  <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        { /*<div className="platform1">
          <h1>Our Founder</h1>
        </div>

        <div className="image-card">
          <div className="about-container">
            <Card.Img
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/team-members/ararso.jpg`}
              className="image"
            />{" "}
            <div className="overlay">
              <div className="text">
                <Button
                  variant="info"
                  style={{ color: "black" }}
                  onClick={handleClick}
                >
                  Read More
                </Button>
              </div>
            </div>
            <Card.Title className="f-name">Ararso Alisho</Card.Title>
            <Card.Text className="f-position">Co-founder and CEO</Card.Text>
            <Modal show={showCard} onHide={handleClick} size="lg" centered>
              <Modal.Header closeButton>
                <Modal.Title>Ararso Alisho</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="model-p"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/team-members/ararso.jpg`}
                    alt="Ararso Alisho"
                    style={{
                      width: "200px",
                      height: "300px",
                      marginRight: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <h4>Ararso Alisho</h4>
                    <h6>Co-founder and CEO</h6>
                    <p>
                      Ararso Alisho is the Co-founder and CEO. From his teenage
                      years, Ararso has been involved in various entrepreneurial
                      ventures and has played a significant role in the tech
                      industry. He is responsible for leading the company to new
                      heights with innovative strategies and a visionary
                      approach.
                    </p>
                    <p>
                      He has a rich background in technology and business
                      development, contributing to numerous successful projects
                      and startups.
                    </p>
                    <p>
                      Currently, he invests in startups, with a special focus on
                      cybersecurity and early-stage tech companies.
                    </p>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
          <div class="about-container">
            <Card.Img
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/team-members/sola.jpg`}
              className="image"
            />

            <div class="overlay">
              <div class="text">
                <Button
                  variant="info"
                  style={{ color: "black" }}
                  onClick={handleClick}
                >
                  Read More
                </Button>
              </div>
            </div>
            <Card.Title className="f-name">Solomon Adola</Card.Title>
            <Card.Text className="f-position">Co-founder and CEO</Card.Text>
          </div>
          <div class="about-container">
            <Card.Img
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/team-members/birhanu.jpg`}
              className="image"
            />

            <div class="overlay">
              <div class="text">
                <Button
                  variant="info"
                  style={{ color: "black" }}
                  onClick={handleClick}
                >
                  Read More
                </Button>
              </div>
            </div>
            <Card.Title className="f-name">Birhanu Worku</Card.Title>
            <Card.Text className="f-position">Co-founder and CEO</Card.Text>
          </div>
          <div class="about-container">
            <Card.Img
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/logo192.png`}
              className="image"
            />

            <div class="overlay">
              <div class="text">
                <Button
                  variant="info"
                  style={{ color: "black" }}
                  onClick={handleClick}
                >
                  Read More
                </Button>
              </div>
            </div>
            <Card.Title className="f-name">Mohamed Nurhuisen</Card.Title>
            <Card.Text className="f-position">Co-founder and CEO</Card.Text>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
