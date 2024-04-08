import React from 'react';
import './footer.css'; // Assume you have a corresponding CSS file for styling

const Footer = () => {
  return (
    <div>
        <div className="footer-container">
            <h6 className="footer-title">Get Started</h6>
            <div className="footer-content">
                <h1>Start Growing With Csolve Tech+ Today</h1>
                <button className="connect-button" onClick={() => { alert('Connect with us!'); }}>
                <a href="">Connect With Us</a>
                </button>
            </div>
            <hr className="footer-divider" />
            <div className="footer-additional">
                <div className="footer-logo-address">
                    {/* <img src={logo} alt="We-Bridge logo" className="footer-logo" /> */}
                    <p>2267 Lava Ridge Ct,<br/>Roseville, CA 95661</p>
                </div>
                <div className="footer-support">
                    <h3>Need support?</h3>
                    <a href="">info@csolvetech.com</a>
                </div>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h3>Sitemap</h3>
                        <div class="line"></div>
                        <ul>
                            <a href=""><li>Home</li></a>
                            <a href=""><li>About Us</li></a>
                            <a href=""><li>Products</li></a>
                            <a href=""><li>Contact Us</li></a>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Resources</h3>
                        <div class="line"></div>
                        <ul>
                            <a href=""><li>Blog</li></a>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Links</h3>
                        <div class="line"></div>
                        <ul>
                            <a href=""><li>Privacy Policy</li></a>
                            <a href=""><li>Terms of use</li></a>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div className='copyright'>
            <div className="lower-part">
                <p>© Copyright 2024. We-Bridge Worlds, LLC. All Rights Reserved.</p>
            </div>
            <div className='lower-part1'>
                <p>San Francisco Web Design by Thomas Digital.</p>
            </div>
        </div>
    </div>
  );
}

export default Footer;

