import React from "react";
import 'font-awesome/css/font-awesome.min.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <h3 className="brand-name">Nexcent</h3>
          <p className="copyright">
            Copyright © 2020 Nexcent ltd. <br />
            All rights reserved
          </p>
          <div className="social-icons">
            <a href="/" aria-label="Instagram">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="/" aria-label="Facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="/" aria-label="Twitter">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="/" aria-label="YouTube">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="column">
            <h4>Company</h4>
            <a href="/">About us</a>
            <a href="/">Blog</a>
            <a href="/">Contact us</a>
            <a href="/">Pricing</a>
            <a href="/">Testimonials</a>
          </div>
          <div className="column">
            <h4>Support</h4>
            <a href="/">Help center</a>
            <a href="/">Terms of service</a>
            <a href="/">Legal</a>
            <a href="/">Privacy policy</a>
            <a href="/">Status</a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="footer-subscribe">
          <h4>Stay up to date</h4>
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
            />
            <button type="submit" aria-label="Subscribe">
              <i className="fa fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
