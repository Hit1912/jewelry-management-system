import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

const Modals = ({ 
    productModalOpen, 
    businessCardModalOpen, 
    productData, 
    onCloseProductModal, 
    onCloseBusinessCardModal,
    onOpenBusinessCardModal
}) => {
    const [copyMsgVisible, setCopyMsgVisible] = useState(false);
    const cardRef = useRef(null);

    const copyPhone = () => {
        const phoneNumber = '+917623990133';
        navigator.clipboard.writeText(phoneNumber).then(() => {
            setCopyMsgVisible(true);
            setTimeout(() => {
                setCopyMsgVisible(false);
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    const downloadCard = async () => {
        if (cardRef.current) {
            const canvas = await html2canvas(cardRef.current, {
                backgroundColor: '#111111',
                scale: 3 // Ultra high quality
            });
            const link = document.createElement('a');
            link.download = 'Shubham_Invitation_Business_Card.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
    };

    const handleOutsideClick = (e, closeModal) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    };

    return (
        <>
            {/* Product Modal */}
            <div 
                className={`modal ${productModalOpen ? 'active' : ''}`}
                onClick={(e) => handleOutsideClick(e, onCloseProductModal)}
            >
                <div className="modal-content">
                    <span className="close-btn" onClick={onCloseProductModal}>&times;</span>
                    <div className="modal-body">
                        <div className="modal-img-container">
                            <img src={productData.image} alt="Product" />
                        </div>
                        <div className="modal-info">
                            <h2>{productData.title}</h2>
                            <div className="divider left"></div>
                            <p>{productData.desc}</p>
                            <div className="modal-cta-buttons">
                                <button className="btn btn-primary" onClick={onOpenBusinessCardModal}>
                                    <i className="fas fa-id-card"></i> View Card
                                </button>
                                <a href="https://wa.me/917623990133" target="_blank" rel="noreferrer" className="btn btn-outline">
                                    <i className="fab fa-whatsapp"></i> WhatsApp
                                </a>
                                <a href="tel:+917623990133" className="btn btn-outline">
                                    <i className="fas fa-phone-alt"></i> Call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Business Card Modal */}
            <div 
                className={`modal ${businessCardModalOpen ? 'active' : ''}`}
                onClick={(e) => handleOutsideClick(e, onCloseBusinessCardModal)}
            >
                <div className="modal-content business-card-modal-content">
                    <span className="close-btn" onClick={onCloseBusinessCardModal}>&times;</span>
                    
                    <div className="business-card-display" ref={cardRef}>
                        <div className="card-inner">
                            <div className="card-front">
                                <div className="card-logo">
                                    <div className="logo-circle">S</div>
                                    <div className="logo-text">
                                        <h2>SHUBHAM</h2>
                                        <span>INVITATION &bull; SURAT</span>
                                    </div>
                                </div>
                                <div className="card-info">
                                    <div className="card-owner">
                                        <h3>Nimisha ben</h3>
                                        <p>Proprietor</p>
                                    </div>
                                    <div className="card-details">
                                        <div className="cd-item">
                                            <i className="fas fa-phone-alt"></i>
                                            <span>+91 76239 90133</span>
                                        </div>
                                        <div className="cd-item">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>Surat, Gujarat, India</span>
                                        </div>
                                        <div className="cd-item">
                                            <i className="fas fa-gem"></i>
                                            <span>Exquisite Jewellery & Invitations</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-modal-actions">
                        <button className="btn btn-download-card" onClick={downloadCard}>
                            <i className="fas fa-download"></i> DOWNLOAD CARD
                        </button>
                        
                        <div className="contact-options-row">
                            <a href="tel:+917623990133" className="contact-option-btn call">
                                <i className="fas fa-phone-alt"></i>
                                <span>Call</span>
                            </a>
                            <a href="https://wa.me/917623990133" target="_blank" rel="noreferrer" className="contact-option-btn whatsapp">
                                <i className="fab fa-whatsapp"></i>
                                <span>WhatsApp</span>
                            </a>
                            <button className="contact-option-btn copy" onClick={copyPhone}>
                                <i className="fas fa-copy"></i>
                                <span>Copy</span>
                            </button>
                        </div>
                        
                        <p className={`copy-msg ${copyMsgVisible ? 'show' : ''}`}>Number Copied to Clipboard!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modals;
