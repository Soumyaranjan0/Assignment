import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Nexcent</h1>
      <div className="container nav-container">
        <nav className="navigation">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/feature">Feature</a></li>
            <li><a href="product">Product</a></li>
            <li><a href="/test">Testimonial</a></li>
            <li><a href="faq">FAQ</a></li>
          </ul>
          <div className="auth-buttons">
            <a href="login" className="btn login-btn">Login</a>
            <a href="signup" className="btn signup-btn">Sign up</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
