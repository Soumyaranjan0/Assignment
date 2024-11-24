import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Nexcent</h1>
      <div className="container nav-container">
        <nav className="navigation">
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Feature</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <div className="auth-buttons">
            <a href="#" className="btn login-btn">Login</a>
            <a href="#" className="btn signup-btn">Sign up</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
