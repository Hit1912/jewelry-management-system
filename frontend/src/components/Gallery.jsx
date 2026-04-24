import React from 'react';

const Gallery = () => {
    const [showAll, setShowAll] = React.useState(false);

    const jewelryAssets = [
        '/assets/ring_product.png',
        '/assets/necklace_product.png',
        '/assets/bangles_product.png',
        '/assets/bridal_product.png',
        '/assets/invitation_product.png',
        '/assets/hero_banner.png'
    ];
    
    const allImages = [
        ...jewelryAssets,
        ...jewelryAssets,
        ...jewelryAssets,
        ...jewelryAssets
    ];

    // Show only 4 images (one row on desktop) initially
    const visibleImages = showAll ? allImages : allImages.slice(0, 4);

    return (
        <section id="gallery" className="gallery">
            <div className="section-title">
                <h2>Gallery</h2>
                <div className="divider"></div>
            </div>
            <div className="gallery-grid">
                {visibleImages.map((src, index) => (
                    <img key={index} src={src} alt={`Gallery Jewelry ${index + 1}`} loading="lazy" />
                ))}
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <button className="btn btn-outline" onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'VIEW LESS IMAGES' : 'VIEW MORE IMAGES'}
                </button>
            </div>
        </section>
    );
};

export default Gallery;
