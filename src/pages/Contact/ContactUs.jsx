import React from "react";
import "./contactus.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons from react-icons library

const ContactUs = () => {
  return (
    <main id="primary" className="site-main">
      {/* Page Banner Section */}
      <section className="page_banner">
        <div className="page_banner_background">
          <div className="page_banner_overlay"></div>
          <div className="page_banner_container">
            <div className="page_banner_body">
              <h5>CONTACT US</h5>
              <h1>Get In Touch</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact_section">
        <div className="container">
          <div className="contact_contents">
            {/* Contact Info Section */}
            <div className="contact_info">
              <div className="contact_item">
                <FaPhone className="contact_icon" />
                <p><a href="tel: (650) 278-9253">(650) 278-9253</a></p>
              </div>
              <div className="contact_item">
                <FaEnvelope className="contact_icon" />
                <p><a href="mailto: info@we-bridge.com">info@we-bridge.com</a></p>
              </div>
              <div className="contact_item">
                <FaMapMarkerAlt className="contact_icon" />
                <p>2267 Lava Ridge Ct, Roseville, CA 95661 USA</p>
                <a href="https://www.google.com/maps/place/2267+Lava+Ridge+Ct,+Roseville,+CA+95661,+USA/" target="_blank" rel="noreferrer">Get directions</a>
              </div>
            </div>
            {/* Contact Form Section */}
            <div className="contact_form">
              <h2>We’d love to hear from you!</h2>
              <form>
                <div className="form_group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form_group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form_group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="faq_section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq_columns">
            <div className="faq_column">
              <div className="faq_item">
                <h3>Why CSolve Technology and Systems?</h3>
                <p>At CSolve, we’ve identified, adapted, and enhanced the best software solutions we could find in various categories. We provide the ability to conveniently package and integrate throughout our product suite as needed, with fast and seamless onboarding. From small scale to enterprise level solutions, we are all about software development from mobile app to web development.</p>
              </div>
              <div className="faq_item">
                <h3>What industries do you serve?</h3>
                <p>We serve a diverse range of industries. Our team has experience in developing software solutions for sectors such as finance, healthcare, education, retail, and more. We understand the unique challenges of each industry and provide solutions that are tailored to meet those needs.</p>
              </div>
              <div className="faq_item">
                <h3>How do you pick your product offerings? </h3>
                <p>At CSolve, we’re focused on providing only the best solutions for our customers so they can grow their business without headaches. All of our products are strategically selected based on our strict criteria standards.</p>
              </div>
            </div>
            <div className="faq_column">
              <div className="faq_item">
                <h3>How does CSolve ensure the quality of its software? </h3>
                <p>Quality is at the heart of everything we do at CSolve. Our team follows best practices in software development to ensure the highest quality. We also conduct rigorous testing at every stage of the development process to ensure that our software is reliable and meets the expectations of our clients.</p>
              </div>
              <div className="faq_item">
                <h3>Why the name CSolve Technology and Systems?</h3>
                <p>The name CSolve comes from our mission to solve challenges with digital software solutions. We believe in the power of technology to solve problems and make life easier. That’s why we’re committed to providing our clients with the best software solutions possible.</p>
              </div>
              <div className="faq_item">
                <h3>What support does CSolve offer to its clients?</h3>
                <p>At CSolve, we believe in providing exceptional support to our clients. Our team is available to assist with any issues that may arise, and we also offer training and resources to help our clients get the most out of our software solutions. We’re committed to ensuring that our clients are satisfied with our services.</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
