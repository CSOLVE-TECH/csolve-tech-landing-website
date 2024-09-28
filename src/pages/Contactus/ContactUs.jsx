import React from "react";
import "./ContactUs.css";
import FAQ from './Faq';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function ContactUs() {
  return (
    <div className="contact-us">
      {/* //contactus page bg image */}
      <div className="contact-us-cover">
        <div className="text-content">
          <p className="title">Contact Us</p>
          <p className="heading">Get in touch</p>
          <p className="description">
            any questions or suggestion? just write us a message
          </p>
        </div>
      </div>
      {/* //contact and send message  */}
      <div className="contact-details">
        {/* company contact detail */}
        <div className="company-details">
          <div className="section">
            <h1>Contact information</h1>
            <p>fill up the form and send us our team will get back to you</p>
          </div>
          <div className="section">
            <h1>Our office</h1>
            <div>
              <div>
                <FaPhone className="icon" style={{ transform: "scaleX(-1)" }} />{" "}
                +2511111890
              </div>
              <div>
                <FaEnvelope className="icon" /> support@csolve.com
              </div>
              <div>
                <FaMapMarkerAlt className="icon" /> 123 Bole Street, Addis
                Ababa, Et
              </div>
            </div>
          </div>
          <div className="section icons">
            {/* Clickable social icons */}
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icons" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter className="social-icons" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="social-icons" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icons" />
            </a>
          </div>
          <div className="big-circle"></div>
          <div className="small-circle"></div>
        </div>
        {/* //contact form */}
        <div className="message-form">
          <form>
            <div className="form-container">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="first name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="last name"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="phone"
                    required
                  />
                </div>
              </div>
              <div className="form-row full-width">
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="your message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-row full-width btn">
                <div className="form-group">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* faq section */}
      <div className="faq">
        <FAQ />
      </div>
    </div>
  );
}

export default ContactUs;
