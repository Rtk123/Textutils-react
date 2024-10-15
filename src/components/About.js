import React from 'react';
 // Import custom CSS

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to our world! We are a passionate team committed to bringing 
          innovative solutions to life. Our mission is to push the boundaries of 
          creativity and deliver exceptional results.
        </p>
        
        <div className="about-features">
          <div className="feature">
            <h2 className="feature-title">🌟 Innovation</h2>
            <p className="feature-text">We believe in the power of ideas to change the world and are always exploring new ways to achieve greatness.</p>
          </div>
          
          <div className="feature">
            <h2 className="feature-title">🚀 Excellence</h2>
            <p className="feature-text">Our commitment to excellence ensures that we always strive for the best in everything we do.</p>
          </div>

          <div className="feature">
            <h2 className="feature-title">🤝 Collaboration</h2>
            <p className="feature-text">We work closely with our partners and clients to bring visions to life through seamless collaboration.</p>
          </div>
        </div>

        <div className="about-footer">
          <p>Let's create something amazing together! Feel free to contact us anytime.</p>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
