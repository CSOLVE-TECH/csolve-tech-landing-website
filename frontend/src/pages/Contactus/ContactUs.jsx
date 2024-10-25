import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";
import FAQ from "./Faq";
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await axios.post(
        "http://localhost:3001/mailer/send",
        formData
      );
      console.log(response);
      setStatus({ loading: false, success: response.data, error: null });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: null,
        error: error.response ? error.response.data : "An error occurred.",
      });
    }
  };

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
          {status.success && (
            <p style={{ color: "green" }}>Sent successfully</p>
          )}
          {status.error && <p style={{ color: "red" }}>error</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="first name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="last name"
                    onChange={handleChange}
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
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="phone"
                    onChange={handleChange}
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
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-row full-width">
                <div className="form-group">
                  <button type="submit" disabled={status.loading}>
                    {!status.loading ? "Submit" : "submitting"}
                  </button>
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
