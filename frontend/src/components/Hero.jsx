import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title-main fade-in-up">Shubham</h1>
                <h2 className="hero-title-sub fade-in-up delay-1">Invitation</h2>
                <p className="tagline fade-in-up delay-2">
                    Elegant Designs for Every Occasion. Handcrafted luxury for your most cherished moments.
                </p>
                <div className="hero-arrow fade-in-up delay-2">
                    <i className="fas fa-chevron-down"></i>
                </div>
                <a href="#collection" className="btn btn-primary fade-in-up delay-2">VIEW COLLECTION</a>
            </div>
        </section>
    );
};

export default Hero;
