import React from 'react';

const About = () => {
    return (
        <section id="about" className="about-centered">
            <div className="section-title">
                <h2>Our Story</h2>
                <div className="divider"></div>
            </div>
            
            <div className="about-centered-container">
                <div className="about-image-centered">
                    <img src="/assets/hero_banner.png" alt="About Shubham Invitation" />
                </div>
                
                <div className="about-text-centered">
                    <p className="lead-text">
                        Welcome to <strong>Shubham Invitation</strong>, Surat's premier destination for exquisite jewelry and premium invitation cards.
                    </p>
                    <p>
                        Founded by <strong>Nimisha ben</strong>, we pride ourselves on offering an unparalleled collection that blends traditional heritage with modern elegance. From stunning bridal sets and intricate necklaces to bespoke wedding invitations, our focus is on quality, craftsmanship, and complete customer satisfaction.
                    </p>
                    <p>
                        Every piece in our collection is curated with the utmost care, ensuring that our clients receive only the finest jewelry that stands the test of time. Let us add a touch of luxury to your most cherished moments.
                    </p>
                    
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Years of Excellence</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5k+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Pure Quality</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
