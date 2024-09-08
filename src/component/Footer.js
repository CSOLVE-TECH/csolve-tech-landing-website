import React from 'react';
import './footer.css'; 

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Fetches the current year

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
                    <h4>Need support?</h4>
                    <a href="">info@csolvetech.com</a>
                </div>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>Sitemap</h4>
                        <div class="line"></div>
                        <ul>
                            <a href=""><li>Home</li></a>
                            <a href=""><li>About Us</li></a>
                            <a href=""><li>Products</li></a>
                            <a href=""><li>Contact Us</li></a>
                        </ul>
                    </div>
                    <div className="footer-column">
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
                    </div>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <div className="lower-part">
                <p>© Copyright {currentYear}. Csolve Tech+, LLC. All Rights Reserved.</p>
            </div>
            <div className='lower-part1'>
                <p>Addis Ababa, Developed by Csolve Tech+</p>
            </div>
        </div>
    </div>
  );
}

export default Footer;

