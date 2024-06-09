import React from "react";
import "./contactus.css";
const ContactUs = () => {
  return (
    <main id="primary" className="site-main">
      <section className="page_banner">
        <div
          className="page_banner_background background_style"
          style={{
            backgroundImage:
              "url(https://we-bridge.com/wp-content/uploads/2022/08/shutterstock_1902776437-1.jpg)",
          }}
        >
          <div className="page_banner_container">
            <div className="page_banner_body">
              <h5>CONTACT US</h5>
              <h1>Get In Touch</h1>
            </div>
          </div>
          <div className="page_banner_overlay"></div>
        </div>
      </section>

      <section id="page_section1" className="page_section">
        <div
          className="contact_us ssclass normalize_padding"
          style={{
            paddingTop: "0px",
            paddingBottom: "0px",
            backgroundColor: "#ffffff",
          }}
        >
          <div className="contact_contents flex_column">
            <div
              className="contact_right"
              style={{
                backgroundImage:
                  "url(https://we-bridge.com/wp-content/uploads/2021/10/we-bridge-contact-us-background-image-2.jpg)",
              }}
            >
              <div className="contact_body">
                <div className="office_title">
                  <div className="office_header">
                    <h2>Our Office</h2>
                  </div>
                  <div className="office_socials">
                    {/* Your social media links */}
                  </div>
                  <div style={{ clear: "both" }}></div>
                </div>

                <div className="contact_info flex_column">
                  <p className="contact_phone contact_col">
                    Phone: <a href="tel: (650) 278-9253">(650) 278-9253</a>
                  </p>
                  <div className="contact_address contact_col">
                    <h6>Address:</h6>
                    <p>
                      2267 Lava Ridge Ct,
                      <br />
                      Roseville, CA 95661 USA
                    </p>
                    <a
                      href="https://www.google.com/maps/place/2267+Lava+Ridge+Ct,+Roseville,+CA+95661,+USA/@38.7476352,-121.2476572,17z/data=!3m1!4b1!4m5!3m4!1s0x809b1feecaa16c21:0x54296d6efd14b713!8m2!3d38.747631!4d-121.2454685"
                      target="_blank"
                    >
                      Get directions
                    </a>
                  </div>
                  <div className="contact_email contact_col">
                    <h6>Email:</h6>
                    <a href="mailto: info@we-bridge.com" target="_blank">
                      info@we-bridge.com
                    </a>
                  </div>
                </div>

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
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq_contents">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq_columns">
            <div className="faq_column">
              <div className="faq_item">
                <h3>Why We-Bridge?</h3>
                <p>
                  We've identified, adapted, and enhanced the best security
                  products we could find in the various categories. We provide
                  the ability to conveniently package and integrate throughout
                  our product suite as needed, with fast and seamless
                  onboarding.
                </p>
              </div>
              <div className="faq_item">
                <h3>How do you pick your product offerings?</h3>
                <p>
                  At We-Bridge, we’re focused on providing only the best
                  solutions for our customers so they can grow their business
                  without headaches. All of our products are strategically
                  selected based on our strict criteria standards.
                </p>
              </div>
            </div>
            <div className="faq_column">
              <div className="faq_item">
                <h3>Why the name We-Bridge?</h3>
                <p>
                  There are a plethora of security products out there, and there
                  are service providers like you who are looking for those
                  products. We want to bridge these worlds and use our expertise
                  to give you what you need, with the absolute best quality and
                  support.
                </p>
              </div>
              <div className="faq_item">
                <h3>What are the benefits for Enterprise customers?</h3>
                <p>
                  Our team is composed of seasoned IT security professionals.
                  We'll introduce you to the best-of-breed products in the
                  industry, with unparalleled support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
