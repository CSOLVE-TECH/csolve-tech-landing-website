import React from "react";
import "./SoftwareDev.css";

function SoftwareDev() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <p>Service</p>
          <h1>Software Development</h1>
        </div>
      </div>
      <div>
        <div className="services">
          <p className="heading">Our services</p>
          <p className="heading-title">
            we specialize in turning ideas into reality through innovative
            software solutions.
          </p>
          <div className="services-list">
            <div>
              <h1>Custom Software Development</h1>
              <p>
                We create bespoke web and mobile applications, providing
                end-to-end development that integrates seamlessly with your
                systems. Our focus on efficiency and user experience ensures
                that every solution is both powerful and intuitive.
              </p>
            </div>
            <div>
              <h1>Product Development</h1>
              <p>
                From concept to market, we help you rapidly develop and launch
                your products. Our services include MVP development for quick
                validation, prototyping to bring your ideas to life, and
                user-centric design to ensure your product resonates with your
                audience.
              </p>
            </div>
            <div>
              <h1>Consulting & Strategy</h1>
              <p>
                Our expert consulting services guide you in choosing the right
                technologies, optimizing your software for scalability, and
                implementing cloud and DevOps strategies to enhance efficiency
                and accelerate your time-to-market.
              </p>
            </div>
          </div>
        </div>
        <div className="chose-us">
          <div>
            <h1 className="heading-title">Why Choose Us?</h1>
            <p>
              We offer agile, scalable, and startup-friendly solutions tailored
              to your business needs. Partner with us for expert development and
              dedicated support that goes beyond launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoftwareDev;
