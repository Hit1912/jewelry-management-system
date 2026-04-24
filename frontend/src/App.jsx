import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Modals from './components/Modals';

function App() {
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [businessCardModalOpen, setBusinessCardModalOpen] = useState(false);
  const [productData, setProductData] = useState({ title: '', image: '', desc: '' });

  const handleOpenProductModal = (title, image, desc) => {
    setProductData({ title, image, desc });
    setProductModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProductModal = () => {
    setProductModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleOpenBusinessCardModal = () => {
    setProductModalOpen(false);
    setBusinessCardModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseBusinessCardModal = () => {
    setBusinessCardModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Navbar onOpenBusinessCardModal={handleOpenBusinessCardModal} />
      <Hero />
      <Collection onOpenProductModal={handleOpenProductModal} />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <Modals 
        productModalOpen={productModalOpen}
        businessCardModalOpen={businessCardModalOpen}
        productData={productData}
        onCloseProductModal={handleCloseProductModal}
        onCloseBusinessCardModal={handleCloseBusinessCardModal}
        onOpenBusinessCardModal={handleOpenBusinessCardModal}
      />
    </>
  );
}

export default App;
