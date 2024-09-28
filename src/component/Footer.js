import React from 'react';
import './footer.css'; 
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear(); // Fetches the current year
    const navigateToContactPage = () => {
        navigate("/contact");
      };
  return (
    <div>
        <div className="footer-container">
            <h6 className="footer-title">Get Started</h6>
            <div className="footer-content">
                <h1>Start Growing With Csolve Tech+ Today</h1>
                <button className="connect-button" onClick={navigateToContactPage}>
                <a href="">Connect With Us</a>
                </button>
            </div>
            <hr className="footer-divider" />
            <div className="footer-additional">
            <div className="footer-logo-address">
                {/* <img src={logo} alt="We-Bridge logo" className="footer-logo" /> */}
                <div className="brand-image-container">
                    <img src="/assets/images/logo.png" alt="Brand" className="brand-image" />
                </div>
                <p>Csolve Tech+, LLC.</p>
            </div>

                <div className="footer-support">
                    <h4>Need support?</h4>
                    <a href="">info@csolvetech.com</a>
                </div>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>Sitemap</h4>
                        <div class="line"></div>
                        <ul>
                            <a href="/"><li>Home</li></a>
                            <a href="/about"><li>About Us</li></a>
                            <a href="/service/software-training"><li>Services</li></a>
                            <a href="/contact"><li>Contact Us</li></a>
                        </ul>
                    </div>
                    {/*<div className="footer-column">
                        <h4>Resources</h4>
                        <div class="line"></div>
                        <ul>
                            <a href=""><li>Blog</li></a>
                        </ul>
                    </div> 
                    <div className="footer-column">
                        <h4>Links</h4>
                        <div class="line"></div>
                        <ul>
                            <a href=""><li>Privacy Policy</li></a>
                            <a href=""><li>Terms of use</li></a>
                        </ul>
                    </div>*/}
                </div>
            </div>
        </div>
        <div className='copyright'>
            <div className="lower-part">
                <p>© Copyright {currentYear}. Csolve Tech+, LLC. All Rights Reserved.</p>
            </div>
            <div className='lower-part1'>
                <p>Addis Ababa,Ethiopia. Developed by Csolve Tech+</p>
            </div>
        </div>
    </div>
  );
}

export default Footer;

