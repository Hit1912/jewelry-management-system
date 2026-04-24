import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenBusinessCardModal }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            // LIGHT MODE
            document.documentElement.style.setProperty('--bg-dark', '#FDFDFD');
            document.documentElement.style.setProperty('--bg-darker', '#F5F5F5');
            document.documentElement.style.setProperty('--bg-navbar', 'rgba(255, 255, 255, 0.98)');
            document.documentElement.style.setProperty('--text-light', '#1A1A1A');
            document.documentElement.style.setProperty('--gray', '#555555');
            document.documentElement.style.setProperty('--white', '#111111'); // Darker for light mode
        } else {
            // DARK MODE
            document.documentElement.style.setProperty('--bg-dark', '#1A1A1A');
            document.documentElement.style.setProperty('--bg-darker', '#111111');
            document.documentElement.style.setProperty('--bg-navbar', 'rgba(20, 20, 20, 0.95)');
            document.documentElement.style.setProperty('--text-light', '#F9F9F9');
            document.documentElement.style.setProperty('--gray', '#A0A0A0');
            document.documentElement.style.setProperty('--white', '#FFFFFF'); // White for dark mode
        }
    };

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <a href="#" className="logo-wrapper">
                    <div className="logo-circle">S</div>
                    <div className="logo-text">
                        <h2>SHUBHAM</h2>
                        <span>INVITATION &bull; SURAT</span>
                    </div>
                </a>
                
                <nav className="nav-links">
                    <a href="#collection">Collection</a>
                    <a href="#about">Our Story</a>
                    <a href="#contact">Contact</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); onOpenBusinessCardModal(); }} className="nav-card-link">Business Card</a>
                    <div className="theme-toggle" onClick={toggleTheme}>
                        <i className={darkMode ? "far fa-moon" : "far fa-sun"}></i>
                    </div>
                </nav>
                
                <div className="mobile-menu-btn" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            
            <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
                <a href="#collection" onClick={closeMenu}>Collection</a>
                <a href="#about" onClick={closeMenu}>Our Story</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
                <a href="#" onClick={(e) => { e.preventDefault(); closeMenu(); onOpenBusinessCardModal(); }}>View Business Card</a>
                <a href="#" onClick={() => { toggleTheme(); closeMenu(); }}>
                    Toggle Theme ({darkMode ? 'Light' : 'Dark'})
                </a>
            </nav>
        </header>
    );
};

export default Navbar;
