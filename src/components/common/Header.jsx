import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-purple relative z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/images/img_image_customlogo.png" alt="Academy of Vedic Vidya Logo" className="h-[67px] w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white font-poppins text-base hover:text-gold transition-colors">Home</Link>
          <Link to="/courses" className="text-white font-poppins text-base hover:text-gold transition-colors">Courses</Link>
          <div className="relative group">
            <Link to="/important-links" className="text-white font-poppins text-base hover:text-gold transition-colors flex items-center">
              Important Links
              <svg className="w-2 h-2 ml-1" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 9L0 0H9L4.5 9Z" fill="white"/>
              </svg>
            </Link>
          </div>
          <Link to="/blog" className="text-white font-poppins text-base hover:text-gold transition-colors">Blog</Link>
          <div className="relative group">
            <Link to="/payment" className="text-white font-poppins text-base hover:text-gold transition-colors flex items-center">
              Payment
              <svg className="w-2 h-2 ml-1" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 9L0 0H9L4.5 9Z" fill="white"/>
              </svg>
            </Link>
          </div>
          <Link to="/career" className="text-white font-poppins text-base hover:text-gold transition-colors">Career</Link>
        </nav>

        {/* Call Now Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="bg-pink border-2 border-white text-white font-inter font-medium text-base px-6 py-3 rounded-[15px] hover:bg-pink-dark transition-colors">
            Call Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-purple md:hidden z-20">
            <div className="px-4 py-2 space-y-3">
              <Link to="/" className="block text-white font-poppins text-base hover:text-gold transition-colors py-2">Home</Link>
              <Link to="/courses" className="block text-white font-poppins text-base hover:text-gold transition-colors py-2">Courses</Link>
              <Link to="/important-links" className="block text-white font-poppins text-base hover:text-gold transition-colors py-2">Important Links</Link>
              <Link to="/blog" className="block text-white font-poppins text-base hover:text-gold transition-colors py-2">Blog</Link>
              <Link to="/payment" className="block text-white font-poppins text-base hover:text-gold transition-colors py-2">Payment</Link>
              <Link to="/career" className="block text-white font-poppins text-base hover:text-gold transition-colors py-2">Career</Link>
              <Link to="/contact" className="block text-pink bg-white font-inter font-medium text-base px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">Call Now</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;