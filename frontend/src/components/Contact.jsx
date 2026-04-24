import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="section-title">
                <h2>Contact Us</h2>
                <div className="divider"></div>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Location</h4>
                            <p>Surat, Gujarat, India</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-phone"></i>
                        <div>
                            <h4>Phone</h4>
                            <p>+91 76239 90133</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <h4>Business Type</h4>
                            <p>Jewellery & Invitation</p>
                        </div>
                    </div>
                    <div className="contact-buttons-row">
                        <a href="tel:+917623990133" className="btn btn-outline"><i className="fas fa-phone-alt"></i> Call Now</a>
                        <a href="https://wa.me/917623990133" target="_blank" rel="noreferrer" className="btn btn-primary"><i className="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
                <div className="contact-map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.52982230402!2d72.82229625!3d21.15920015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
