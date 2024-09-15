import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateToResourcesPage = () => {
    navigate("/resources");
  };
  const navigateToContactUsPage = () => {
    navigate("/contact");
  };
  const navigateToServicesPage = () => {
    navigate("/service/software-development");
  };

  return (
    <div>
      <div className="home-container">
        <div>
          <h1 className="home-title">Csolve_Tech+</h1>
          <p className="animated-heading home-title">
            The ultimate complete technology solution
          </p>
          <div>
            <button className="home-buttonn" onClick={navigateToServicesPage}>
              View Services
            </button>
            <button className="home-button" onClick={navigateToContactUsPage}>
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="platform">
        <h5>WE-BRIDGE SOFTWARE SOLUTIONS</h5>
        <h1>
          Simple. Secure. Connected. Efficient. Scalable. Reliable. Intuitive.
          Adaptable
        </h1>
        <div className="techinfo">
          <p>
            At Csolve-Tech+, we pride ourselves on delivering simple, yet
            powerful software solutions that are secure and designed to keep
            your business connected. Our services are built to be efficient,
            ensuring smooth operations, while remaining scalable to grow
            alongside your business. We provide reliable systems you can count
            on, with an intuitive user experience that requires minimal
            training. Whether you're looking to streamline workflows or adopt
            new technologies, our solutions are adaptable to meet the
            ever-changing demands of today's digital world.
          </p>
        </div>
      </div>

      <div className="services-section">
        <div className="service-card">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/homeImage1.png`}
            alt="Software and Cybersecurity Solutions"
            className="card-image"
          />
          <div className="card-text">
            <h3>
              One-stop shop for cutting-edge software
              solutions tailored to secure your digital assets.
            </h3>
          </div>
        </div>

        <div className="service-card">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/homeimage2.png`}
            alt="Easy Software Integration"
            className="card-image"
          />
          <div className="card-text">
            <h3>
              Seamless integration of scalable software solutions designed to
              simplify operations and drive business growth.
            </h3>
          </div>
        </div>

        <div className="service-card">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/homeimage3.png`}
            alt="Cost-Effective Enterprise Software"
            className="card-image"
          />
          <div className="card-text">
            <h3>
              Cost-effective, enterprise-grade software for businesses of all
              sizes, ensuring efficiency and reliability at every step.
            </h3>
          </div>
        </div>
      </div>

      <div className="resources-section">
        <h2>Get Updated</h2>
        <p>
          Discover featured resources on the latest topics—created and curated
          specifically for <strong>Our Services</strong>.
        </p>
        <button className="resources-button" onClick={navigateToResourcesPage}>
          Go To Resources
        </button>
      </div>
    </div>
  );
};

export default Home;
