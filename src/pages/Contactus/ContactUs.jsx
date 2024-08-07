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
            <FaFacebook className="social-icons" />
            <FaSquareXTwitter className="social-icons" />
            <FaTelegram className="social-icons" />
            <FaLinkedin className="social-icons" />
          </div>
          <div className="big-circle"></div>
          <div className="small-circle"></div>
        </div>
        {/* //contact form */}
        <div class="message-form">
          <form>
            <div className="form-container">
              <div class="form-row">
                <div class="form-group">
                  <label for="first-name">first name</label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="last-name">last name</label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="email">email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="phone">phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>
              <div class="form-row full-width">
                <div class="form-group">
                  <label for="message">message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="form-row full-width btn">
                <div class="form-group">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* faq section */}
      <div className="faq">
        <FAQ/>
      </div>
    </div>
  );
}

export default ContactUs;
