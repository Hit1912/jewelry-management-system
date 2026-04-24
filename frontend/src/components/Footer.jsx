import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-big">
            <div className="footer-container">
                <div className="footer-section brand-section">
                    <div className="logo-wrapper">
                        <div className="logo-circle">S</div>
                        <div className="logo-text">
                            <h2>SHUBHAM</h2>
                            <span>INVITATION &bull; SURAT</span>
                        </div>
                    </div>
                    <p className="footer-about">
                        Premier destination for exquisite jewelry and premium invitation cards in Surat. 
                        Bringing elegance and luxury to your most cherished moments since 2026.
                    </p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                <div className="footer-section links-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#collection">Our Collection</a></li>
                        <li><a href="#about">Our Story</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-section contact-section">
                    <h4>Contact Info</h4>
                    <div className="footer-contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Surat, Gujarat, India</p>
                    </div>
                    <div className="footer-contact-item">
                        <i className="fas fa-phone-alt"></i>
                        <p>+91 76239 90133</p>
                    </div>
                    <div className="footer-contact-item">
                        <i className="fas fa-envelope"></i>
                        <p>info@shubhaminvitation.com</p>
                    </div>
                    <div className="footer-contact-item">
                        <i className="fas fa-clock"></i>
                        <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                    </div>
                </div>

                <div className="footer-section newsletter-section">
                    <h4>Stay Updated</h4>
                    <p>Subscribe to get the latest news on our collection.</p>
                    <div className="footer-newsletter">
                        <input type="email" placeholder="Your Email Address" />
                        <button className="btn-send"><i className="fas fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p>&copy; 2026 Shubham Invitation. All Rights Reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
