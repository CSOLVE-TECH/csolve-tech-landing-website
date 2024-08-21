import React, { useState } from "react";
import "../styles/about.css";
import { Card, CardGroup, Button, Modal } from "react-bootstrap";
import bgVideo from "../images/intor.mp4"
const About = () => {
  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    setShowCard(!showCard);
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100vw"
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%", 
          }}
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
          {/* <h1>Your Text Here</h1>
          <p>Additional text can go here</p> */}
        </div>
      </div>

      <div className="platform">
        <h5>WE-DEVELOP PRODUCT</h5>
        <h1>Complete Technology Solutions</h1>
        <div className="techinfo">
          <p>
          Businesses today need to protect their digital assets and information without complicated and expensive setups. 
          At Csolve Tech+, we work and partner with top companies to offer a comprehensive and curated platform of the best software solutions for your needs.
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
            <Card>
              <Card.Img variant="top" src={require("../images/software.jpg")} />
              <Card.Body>
                <Card.Title>Software Only</Card.Title>
                <Card.Text>
                  When hardware is involved it makes the solution complicated
                  and expensive to set up.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={require("../images/secure.jpg")} />
              <Card.Body>
                <Card.Title>Extremely Secure</Card.Title>
                <Card.Text>
                  The product must be the most secure offering compared to its
                  competitors.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>

          <CardGroup className="about-card">
            <Card>
              <Card.Img variant="top" src={require("../images/afford.jpeg")} />
              <Card.Body>
                <Card.Title>Affordable</Card.Title>
                <Card.Text>
                  Products we offer must be low-cost compared to other
                  solutions.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={require("../images/reliable.jpeg")} />
              <Card.Body>
                <Card.Title>Reliable</Card.Title>
                <Card.Text>
                  Both the product and the company must be reliable so our
                  customers can stick with it long term.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
      <div className="platform">
        <h5>GET STARTED</h5>
        <h1>Interested in Partnering with Csolve Tech+?</h1>
        <div className="techinfo">
          <div class="buttons">
            <button class="blob-btn">
              Send Us Message
              <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
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

        <div className="platform1">
          <h1>Our Founder</h1>
        </div>

        <div className="image-card">
          <div className="about-container">
            <Card.Img
              variant="top"
              src={require("../images/team-members/ararso.jpg")}
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
            {/* Modal for displaying additional info */}
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
                    src="../images/team-members/ararso.jpg"
                    alt="Ararso Alisho"
                    style={{
                      width: "250px",
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
              src={require("../images/team-members/sola.jpg")}
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
              src={require("../images/team-members/birhanu.jpg")}
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
              src={require("../images/logo192.png")}
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
        </div>
      </div>
    </div>
  );
};

export default About;
