import React from "react";
import "./Home.css"; 

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div>
          <h1 className="home-title">Csolve_Tech+</h1>
          <p className="animated-heading home-title">
          The ultimate complete technology solution          </p>
          <div>
            <button className="home-buttonn">View Services</button>
            <button className="home-button">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="platform">
        <h5>WE-BRIDGE SOFTWARE SOLUTIONS</h5>
        <h1>Simple. Secure. Connected. Efficient. Scalable. Reliable. Intuitive. Adaptable </h1>
        <div className="techinfo">
          <p>
            Businesses today need to protect their digital assets and
            information – without complicated and expensive setup. We-Bridge
            partners with only the best companies to serve you a complete and
            curated platform of cybersecurity and data management solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;