import React, { useState } from 'react';

const Collection = ({ onOpenProductModal }) => {
    const [viewState, setViewState] = useState('categories'); // 'categories' or 'products' or 'search'
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { name: 'Rings', image: '/assets/ring_product.png' },
        { name: 'Necklace', image: '/assets/necklace_product.png' },
        { name: 'Bangles', image: '/assets/bangles_product.png' },
        { name: 'Bridal Jewellery', image: '/assets/bridal_product.png' },
        { name: 'Luxury Watches', image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800' },
        { name: 'Mangalsutras', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800' }
    ];

    const products = [
        // RINGS
        { category: 'Rings', name: 'Exquisite Diamond Ring', image: '/assets/ring_product.png', desc: 'A beautifully crafted diamond and gold ring, perfect for engagements and special occasions.' },
        { category: 'Rings', name: 'Gold Wedding Band', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3f41e?auto=format&fit=crop&q=80&w=800', desc: 'Elegant 18k solid gold wedding band with a polished finish.' },
        { category: 'Rings', name: 'Sapphire Eternity Ring', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800', desc: 'Stunning blue sapphire eternity ring set in white gold.' },
        { category: 'Rings', name: 'Emerald Cut Ring', image: 'https://images.unsplash.com/photo-1573408302355-62628bc411e1?auto=format&fit=crop&q=80&w=800', desc: 'Classic emerald cut diamond ring in a platinum setting.' },
        
        // NECKLACES
        { category: 'Necklace', name: 'Royal Gold Necklace', image: '/assets/necklace_product.png', desc: 'A stunning 24k gold necklace designed for elegance.' },
        { category: 'Necklace', name: 'Diamond Choker', image: 'https://images.unsplash.com/photo-1599643478524-fb66f4568e0a?auto=format&fit=crop&q=80&w=800', desc: 'Brilliant diamond choker necklace for high-profile events.' },
        { category: 'Necklace', name: 'Emerald Pendant', image: 'https://images.unsplash.com/photo-1611085583191-a3b13beca334?auto=format&fit=crop&q=80&w=800', desc: 'Deep green emerald pendant set in 18k yellow gold.' },
        
        // BANGLES
        { category: 'Bangles', name: 'Traditional Gold Bangles', image: '/assets/bangles_product.png', desc: 'Set of traditional Indian gold bangles crafted with precision.' },
        
        // BRIDAL
        { category: 'Bridal Jewellery', name: 'Majestic Bridal Set', image: '/assets/bridal_product.png', desc: 'Our premium bridal jewelry set, designed to make your special day unforgettable.' },
        
        // WATCHES
        { category: 'Luxury Watches', name: 'Premium Gold Chronograph', image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800', desc: 'A masterpiece of timekeeping with genuine gold plating.' },

        // MANGALSUTRAS
        { category: 'Mangalsutras', name: 'Traditional Gold Mangalsutra', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800', desc: 'A symbol of sacred union crafted in 22K gold with traditional black beads.' }
    ];

    const handleCategoryClick = (catName) => {
        setActiveCategory(catName);
        setViewState('products');
        setSearchQuery(''); // Clear search when browsing categories
    };

    const handleBackClick = () => {
        setViewState('categories');
        setActiveCategory(null);
        setSearchQuery('');
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim() !== '') {
            setViewState('search');
        } else if (activeCategory) {
            setViewState('products');
        } else {
            setViewState('categories');
        }
    };

    const displayProducts = viewState === 'search' 
        ? products.filter(p => 
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : products.filter(p => p.category === activeCategory);

    return (
        <section id="collection" className="collection">
            <div className="section-title">
                <h2>
                    {viewState === 'categories' ? 'Our Collection' : 
                     viewState === 'search' ? 'Search Results' : 
                     `${activeCategory} Collection`}
                </h2>
                <div className="divider"></div>
            </div>

            {/* Search Bar - Always visible */}
            <div className="search-container">
                <div className="search-wrapper">
                    <i className="fas fa-search search-icon"></i>
                    <input 
                        type="text" 
                        placeholder="Search for jewelry (e.g., Rings, Gold...)" 
                        className="search-input"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            {(viewState === 'products' || (viewState === 'search' && searchQuery !== '')) && (
                <div className="back-button-container">
                    <button className="back-btn" onClick={handleBackClick}>
                        <i className="fas fa-arrow-left"></i> Back to Main Collection
                    </button>
                </div>
            )}

            <div className="product-grid">
                {viewState === 'categories' ? (
                    categories.map((cat, index) => (
                        <div key={index} className="product-card category-card" onClick={() => handleCategoryClick(cat.name)}>
                            <div className="img-wrapper">
                                <img src={cat.image} alt={cat.name} />
                                <div className="category-overlay">
                                    <div className="overlay-content">
                                        <span>Explore</span>
                                        <div className="small-divider"></div>
                                    </div>
                                </div>
                            </div>
                            <h3>{cat.name}</h3>
                        </div>
                    ))
                ) : (
                    displayProducts.length > 0 ? (
                        displayProducts.map((item, index) => (
                            <div 
                                key={index} 
                                className="product-card product-item-card animate-fade-in" 
                                onClick={() => onOpenProductModal(item.name, item.image, item.desc)}
                            >
                                <div className="img-wrapper">
                                    <img src={item.image} alt={item.name} />
                                    <div className="product-overlay">
                                        <i className="fas fa-search-plus"></i>
                                    </div>
                                </div>
                                <div className="product-info-label">
                                    <h3>{item.name}</h3>
                                    <span className="item-cat">{item.category}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            <p>No jewelry found matching your search.</p>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default Collection;
